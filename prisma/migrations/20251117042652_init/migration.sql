-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'EXPERT', 'ADMIN');

-- CreateEnum
CREATE TYPE "PostStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED', 'VERIFIED');

-- CreateTable
CREATE TABLE "User" (
    "uid" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "SpeciesPost" (
    "id" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "aiPrediction" TEXT,
    "userNotes" TEXT,
    "status" "PostStatus" NOT NULL DEFAULT 'PENDING',
    "userUid" TEXT NOT NULL,
    "verifiedByUid" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SpeciesPost_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "SpeciesPost" ADD CONSTRAINT "SpeciesPost_userUid_fkey" FOREIGN KEY ("userUid") REFERENCES "User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpeciesPost" ADD CONSTRAINT "SpeciesPost_verifiedByUid_fkey" FOREIGN KEY ("verifiedByUid") REFERENCES "User"("uid") ON DELETE SET NULL ON UPDATE CASCADE;
