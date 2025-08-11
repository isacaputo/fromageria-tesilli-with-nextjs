/*
  Warnings:

  - You are about to drop the column `Banner` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Product" DROP COLUMN "Banner",
ADD COLUMN     "banner" TEXT;
