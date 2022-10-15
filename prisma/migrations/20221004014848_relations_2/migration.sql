-- DropForeignKey
ALTER TABLE `contact_church` DROP FOREIGN KEY `contact_church_idChurch_fkey`;

-- AddForeignKey
ALTER TABLE `contact_church` ADD CONSTRAINT `contact_church_idChurch_fkey` FOREIGN KEY (`idChurch`) REFERENCES `church`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
