/*
  Warnings:

  - A unique constraint covering the columns `[cnpj]` on the table `church` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cnpj` to the `church` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `church` ADD COLUMN `cnpj` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `church_cnpj_key` ON `church`(`cnpj`);
