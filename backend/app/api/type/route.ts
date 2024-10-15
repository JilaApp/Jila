import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type");
    const videos = await prisma.videos.findMany();

    if (type) {
        return NextResponse.json(videos.filter((video) => video.type === type));
    }

    return NextResponse.json(videos);
}