/*
  Warnings:

  - Added the required column `password` to the `wifi` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "wifi" ADD COLUMN     "password" TEXT NOT NULL;
