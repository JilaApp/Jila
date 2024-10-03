import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: Request) {
  const videos = await prisma.videos.findMany();

  return NextResponse.json(videos);
}
