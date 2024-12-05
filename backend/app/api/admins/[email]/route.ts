import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { email: string } }
) {
  const { email } = params;

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  try {
    // Check if the email exists in the database
    const verifiedUser = await prisma.admins.findFirst({ where: { email } });

    if (verifiedUser) {
      return NextResponse.json({ authenticated: true }, { status: 200 });
    } else {
      return NextResponse.json({ authenticated: false }, { status: 403 });
    }
  } catch (error) {
    console.error("Error verifying email:", error);
    return NextResponse.json({ error: "Error verifying email" }, { status: 500 });
  }
}
