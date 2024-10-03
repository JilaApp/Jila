-- CreateEnum
CREATE TYPE "VideoType" AS ENUM ('EDUCATIONAL', 'DINING', 'MEDICAL', 'TRANSPORTATION', 'LEGAL');

-- CreateTable
CREATE TABLE "videos" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "show" BOOLEAN NOT NULL DEFAULT true,
    "type" "VideoType" NOT NULL,
    "length" TEXT NOT NULL,
    "link" TEXT NOT NULL,

    CONSTRAINT "videos_pkey" PRIMARY KEY ("id")
);
