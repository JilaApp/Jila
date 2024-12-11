import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { topic_id: string } }
) {
  if (!params.topic_id) {
    return NextResponse.json({ error: "Topic ID is required" }, { status: 400 });
  }

  const videos = await prisma.videos.findMany({
    where: { topic_id: params.topic_id, show: true },
  });

  if (videos.length == 0) {
    return NextResponse.json({ error: "No videos found" }, { status: 404 });
  }

  return NextResponse.json(videos);
}
