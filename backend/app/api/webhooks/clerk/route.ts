// File: app/api/webhooks/clerk/route.ts

import { Webhook } from 'svix';
import { headers } from 'next/headers';
import { WebhookEvent } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import prisma from "@/lib/prisma"; // 👈 Make sure this path is correct

export async function POST(req: Request) {
  // Get the webhook secret from your environment variables
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error('Please add CLERK_WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local');
  }

  // Get the headers for verification
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If the headers are missing, return an error
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error: Missing Svix headers', { status: 400 });
  }

  // Get the request body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Verify the webhook signature
  const wh = new Webhook(WEBHOOK_SECRET);
  let evt: WebhookEvent;

  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return new Response('Error verifying webhook', { status: 400 });
  }

  // Get the event type
  const eventType = evt.type;

  // ✅ THIS IS WHERE YOU ADD THE USER TO YOUR DATABASE
  if (eventType === 'user.created') {
    const { id, email_addresses } = evt.data;
    const email = email_addresses[0]?.email_address;

    if (!email) {
      return NextResponse.json({ error: 'Email address is missing' }, { status: 400 });
    }

    // Use your database client to create a new admin/user.
    // I'm assuming your table is named 'admins' and has an 'email' column.
    try {
      await prisma.admins.create({ // 👈 Adjust 'db.admins.create' to match your ORM/client
        data: {
          email: email,
        },
      });
      console.log(`User ${email} was successfully added to the database.`);
    } catch (dbError) {
      console.error("Database error:", dbError);
      return NextResponse.json({ error: 'Failed to save user to database' }, { status: 500 });
    }
  }

  // Return a 200 OK response to Clerk
  return new Response('', { status: 200 });
}