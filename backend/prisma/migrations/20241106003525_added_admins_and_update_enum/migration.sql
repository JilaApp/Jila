/*
  Warnings:

  - The values [EDUCATIONAL,DINING] on the enum `VideoType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "VideoType_new" AS ENUM ('PROFESSIONAL_DEVELOPMENT', 'MEDICAL', 'TRANSPORTATION', 'LEGAL', 'OTHER');
ALTER TABLE "videos" ALTER COLUMN "type" TYPE "VideoType_new" USING ("type"::text::"VideoType_new");
ALTER TYPE "VideoType" RENAME TO "VideoType_old";
ALTER TYPE "VideoType_new" RENAME TO "VideoType";
DROP TYPE "VideoType_old";
COMMIT;

-- CreateTable
CREATE TABLE "admins" (
    "uid" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "admins_pkey" PRIMARY KEY ("uid")
);
