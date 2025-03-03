/*
  Warnings:

  - You are about to alter the column `average_rating` on the `content` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "content" ALTER COLUMN "average_rating" SET DATA TYPE INTEGER;
