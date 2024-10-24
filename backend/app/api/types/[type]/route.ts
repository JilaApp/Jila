import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { VideoType } from "@prisma/client";

export async function GET(
  request: Request,
  { params }: { params: { type: string } }
) {
  if (!params.type) {
    return NextResponse.json({ error: "Type is required" }, { status: 400 });
  }

  const type = params.type.toUpperCase();

  if (!Object.values(VideoType).includes(type as VideoType)) {
    return NextResponse.json({ error: "Invalid type" }, { status: 400 });
  }

  const videos = await prisma.videos.findMany({
    where: { type: type as VideoType },
  });

  if (!videos) {
    return NextResponse.json({ error: "No videos found" }, { status: 404 });
  }

  return NextResponse.json(videos);
}
