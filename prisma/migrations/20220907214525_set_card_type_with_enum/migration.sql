/*
  Warnings:

  - Changed the type of `type` on the `cards` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "cardType" AS ENUM ('credit', 'debit', 'both');

-- AlterTable
ALTER TABLE "cards" DROP COLUMN "type",
ADD COLUMN     "type" "cardType" NOT NULL;
