import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";


export async function POST(request: Request) {
    try {
      const body = await request.json();
    
      const {email} = body;

      const newUser = await prisma.admins.create({
        data: {email : email},
      });
  
      return NextResponse.json(newUser, { status: 201 });

    } catch (error: any) {
      if (error) {
        return NextResponse.json({ errors: error.errors }, { status: 400 });
      }
  
      return NextResponse.json({ error: "Failed to add User" }, { status: 500 });
    }
  }

  export async function DELETE(request: Request) {
    try {
      const { searchParams } = new URL(request.url);
      const email = searchParams.get("email");
  
      if (!email) {
        return NextResponse.json({ error: "Email is required" }, { status: 400 });
      }
  
      const user = await prisma.admins.findFirst({
        where: {email},
      });

      const deletedUser = await prisma.admins.delete({
         where: {uid: user?.uid},
      });
  
      if (!deletedUser) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
      }
  
      return NextResponse.json({ message: "User deleted successfully", deletedUser }, { status: 200 });
  
    } catch (error: any) {
    
      return NextResponse.json({ error: error.message || "Failed to delete user" }, { status: 500 });
    }
  }