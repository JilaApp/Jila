import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { use } from "react";


async function AuthHelper(email) {
    try {
        const user = await prisma.admins.findUnique({
            where:{email: email}
        });

        if(user) {
            return true;
        } else {
            NextResponse.json({ error: "User is not verified" }, { status: 404 });
            return false;
        }

    } catch (error) {
        return NextResponse.json({ error: "Error checking admin status:" }, { status: 500 });
    }
    
}