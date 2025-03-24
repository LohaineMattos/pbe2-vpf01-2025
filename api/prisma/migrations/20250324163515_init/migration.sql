-- CreateTable
CREATE TABLE `PizzaPedido` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pizzaId` INTEGER NOT NULL,
    `pedidoId` INTEGER NOT NULL,
    `valor` DOUBLE NOT NULL,
    `subtotal` DOUBLE NOT NULL,
    `quantidade` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `PizzaPedido` ADD CONSTRAINT `PizzaPedido_pizzaId_fkey` FOREIGN KEY (`pizzaId`) REFERENCES `Pizza`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PizzaPedido` ADD CONSTRAINT `PizzaPedido_pedidoId_fkey` FOREIGN KEY (`pedidoId`) REFERENCES `Pedido`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
