/*
  Warnings:

  - Added the required column `characteristics` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TopLevelCategory" AS ENUM ('Courses', 'Services', 'Books', 'Products');

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "characteristics" JSONB NOT NULL,
ALTER COLUMN "price" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "oldPrice" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "credit" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "calculatedRating" SET DATA TYPE DOUBLE PRECISION;

-- CreateTable
CREATE TABLE "Review" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TopPage" (
    "id" TEXT NOT NULL,
    "firstCategory" "TopLevelCategory" NOT NULL,
    "secondCategory" TEXT NOT NULL,
    "alias" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "seoText" TEXT NOT NULL,
    "tagsTitle" TEXT NOT NULL,
    "tags" TEXT[],

    CONSTRAINT "TopPage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Hh" (
    "id" TEXT NOT NULL,
    "count" INTEGER NOT NULL,
    "juniorSalary" DOUBLE PRECISION NOT NULL,
    "middleSalary" DOUBLE PRECISION NOT NULL,
    "seniorSalary" DOUBLE PRECISION NOT NULL,
    "topPageId" TEXT NOT NULL,

    CONSTRAINT "Hh_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Advantage" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "topPageId" TEXT NOT NULL,

    CONSTRAINT "Advantage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Hh_topPageId_key" ON "Hh"("topPageId");

-- AddForeignKey
ALTER TABLE "Hh" ADD CONSTRAINT "Hh_topPageId_fkey" FOREIGN KEY ("topPageId") REFERENCES "TopPage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Advantage" ADD CONSTRAINT "Advantage_topPageId_fkey" FOREIGN KEY ("topPageId") REFERENCES "TopPage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
