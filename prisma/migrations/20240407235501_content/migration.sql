/*
  Warnings:

  - You are about to drop the column `contenu` on the `Contact` table. All the data in the column will be lost.
  - Added the required column `content` to the `Contact` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Contact" DROP COLUMN "contenu",
ADD COLUMN     "content" TEXT NOT NULL;
