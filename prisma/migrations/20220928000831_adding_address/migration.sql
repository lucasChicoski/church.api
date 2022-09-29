-- CreateTable
CREATE TABLE `address_church` (
    `id` VARCHAR(191) NOT NULL,
    `idChurch` VARCHAR(191) NOT NULL,
    `state` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `neighborhood` VARCHAR(191) NOT NULL,
    `street` VARCHAR(191) NOT NULL,
    `cep` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `address_church` ADD CONSTRAINT `address_church_idChurch_fkey` FOREIGN KEY (`idChurch`) REFERENCES `church`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
