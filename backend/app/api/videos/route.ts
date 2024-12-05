import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { VideoType } from "@prisma/client";
import { z } from "zod";

const videoSchema = z.object({
  title: z.string().min(1, "Title is required"),
  show: z.boolean().optional(),
  type: z.nativeEnum(VideoType),
  length: z
    .string()
    .regex(/^[0-5]?[0-9]:[0-5][0-9]$/, "Length must be in MM:SS format"),
  link: z
    .string()
    .min(11, "Link (YouTube video ID) must be exactly 11 characters long")
    .max(11, "Link (YouTube video ID) must be exactly 11 characters long")
    .regex(/^[a-zA-Z0-9_-]{11}$/, "Invalid YouTube video ID format"),
});

export async function GET() {
  try {
    const videos = await prisma.videos.findMany();
    return NextResponse.json(videos);
  } catch (error) {
    console.error('Error fetching videos:', error);
    return NextResponse.json({ error: 'Error fetching videos' }, { status: 500 });
  }
}
export async function POST(request: Request) {
  try {
    const body = await request.json();

    const parsedData = videoSchema.parse(body);

    const { title, show, type, length, link } = parsedData;

    const newVideo = await prisma.videos.create({
      data: { title, show: show ?? true, type, length, link },
    });

    return NextResponse.json(newVideo, { status: 201 });
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ errors: error.errors }, { status: 400 });
    }

    return NextResponse.json({ error: "Failed to add video" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    // Parse the request body to get the video id
    const { id } = await request.json();

    if (!id) {
      return NextResponse.json(
        { error: "Video id is required" },
        { status: 400 }
      );
    }

    // Find the video by id
    const video = await prisma.videos.findFirst({
      where: { id },
    });

    if (!video) {
      return NextResponse.json({ error: "Video not found" }, { status: 404 });
    }

    // Delete the video by ID
    const deletedVideo = await prisma.videos.delete({
      where: { id: video.id },
    });

    return NextResponse.json(deletedVideo, { status: 200 });
  } catch (error) {
    console.error("Failed to delete video:", error);
    return NextResponse.json(
      { error: "Failed to delete video" },
      { status: 500 }
    );
  }
}
