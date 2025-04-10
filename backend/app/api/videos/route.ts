import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { VideoType } from "@prisma/client";
import { z } from "zod";
import { v4 as uuidv4 } from "uuid";

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
  topic: z.string().min(1, "Topic is required"),
  topic_id: z.string().optional(),
  sequence: z.number().optional(),
  google_drive_link: z.string().optional(),
  num_upvotes: z.number().optional(),
  num_downvotes: z.number().optional(),
});

// export async function GET() {
//   try {
//     const videos = await prisma.videos.findMany();
//     return NextResponse.json(videos);
//   } catch (error) {
//     console.error('Error fetching videos:', error);
//     return NextResponse.json({ error: 'Error fetching videos' }, { status: 500 });
//   }
// }

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const searchTerm = searchParams.get("searchTerm");

    let videos;

    if (searchTerm && searchTerm.trim() !== "") {
      videos = await prisma.videos.findMany({
        where: {
          topic: {
            contains: searchTerm,
            mode: "insensitive",
          },
        },
      });
    } else {
      videos = await prisma.videos.findMany();
    }

    return NextResponse.json(videos, { status: 200 });
  } catch (error) {
    console.error("Error fetching videos:", error);
    return NextResponse.json(
      { error: "Error fetching videos" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const parsedData = videoSchema.parse(body);

    const { title, show, type, length, link, topic, topic_id, sequence, google_drive_link, num_upvotes, num_downvotes } = parsedData;

    const newVideo = await prisma.videos.create({
      data: { title, show: show ?? true, type, length, link, topic, topic_id : topic_id ?? uuidv4(), sequence, google_drive_link, num_upvotes, num_downvotes },
    });

    return NextResponse.json(newVideo, { status: 201 });
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ errors: error.errors }, { status: 400 });
    }

    return NextResponse.json({ error: "Failed to add video" + error }, { status: 500 });
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
 
export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { id, action } = body;

    if (!id || !action) {
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
    }

    const video = await prisma.videos.findUnique({
      where: { id },
    });

    if (!video) {
      return NextResponse.json({ error: "Video not found" }, { status: 404 });
    }

    let updateData = {};
    if (action === "upvote") {
      updateData = { num_upvotes: (video.num_upvotes ?? 0) + 1 };
    } else if (action === "downvote") {
      updateData = { num_downvotes: (video.num_downvotes ?? 0) + 1 };
    } else {
      return NextResponse.json({ error: "Invalid action" }, { status: 400 });
    }

    const updatedVideo = await prisma.videos.update({
      where: { id },
      data: updateData,
    });

    return NextResponse.json(updatedVideo, { status: 200 });
  } catch (error: any) {
    console.error("Failed to update video votes:", error);
    return NextResponse.json({ error: "Failed to update video votes" }, { status: 500 });
  }
}

// export async function GET(request: Request) {
//   try {
//     const { searchParams } = new URL(request.url);
//     const searchTerm = searchParams.get("searchTerm");

//     if (!searchTerm || searchTerm.trim() === "") {
//       return NextResponse.json(
//         { error: "Search term is required" },
//         { status: 400 }
//       );
//     }

//     const videos = await prisma.videos.findMany({
//       where: {
//         topic: {
//           contains: searchTerm,
//           mode: "insensitive",
//         },
//       },
//     });

//     return NextResponse.json(videos, { status: 200 });
//   } catch (error) {
//     console.error("Error fetching videos by search term:", error);
//     return NextResponse.json(
//       { error: "Error fetching videos by search term" },
//       { status: 500 }
//     );
//   }
// }