/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `church` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `church_code_key` ON `church`(`code`);
