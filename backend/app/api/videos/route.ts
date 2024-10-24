import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { VideoArgs } from "@/types";
import { VideoType } from "@prisma/client";

export async function GET(request: Request) {
  const videos = await prisma.videos.findMany();

  return NextResponse.json(videos);
}

export async function POST(request: Request) {
  try {
    // parse the JSON body from the request
    const body: VideoArgs = await request.json();
    const { title, show, type, length, link } = body;

    // Validate the required fields
    if (!title || !type || !length || !link) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!Object.values(VideoType).includes(type as VideoType)) {
      return NextResponse.json({ error: "Invalid type" }, { status: 400 });
    }

    // create a new video in prisma
    const newVideo = await prisma.videos.create({
      data: {
        title,
        show: show ?? true, // Default to true if not provided
        type,
        length,
        link,
      },
    });

    // Return the newly created video record as a response
    return NextResponse.json(newVideo, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to add video" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    // Get the video title from the request URL
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Video id is required" },
        { status: 400 }
      );
    }

    // Find the video by title
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
