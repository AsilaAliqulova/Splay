/*
  Warnings:

  - Added the required column `hashedToken` to the `admin` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "admin" ADD COLUMN     "hashedToken" TEXT NOT NULL;
