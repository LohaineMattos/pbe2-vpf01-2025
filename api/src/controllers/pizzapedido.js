const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        // Validar se o pedidoId existe
        const { pedidoId, pizzaId, valor, quantidade } = req.body;

        // Verificar se o pedidoId existe na tabela Pedido
        const pedido = await prisma.pedido.findUnique({
            where: { id: pedidoId }
        });

        if (!pedido) {
            return res.status(404).json({ error: "Pedido não encontrado" });
        }

        // Verificar se o pizzaId existe na tabela Pizza
        const pizza = await prisma.pizza.findUnique({
            where: { id: pizzaId }
        });

        if (!pizza) {
            return res.status(404).json({ error: "Pizza não encontrada" });
        }

        // Calcular o subtotal
        const subtotal = valor * quantidade;

        // Criar o registro no PizzaPedido
        const pizzapedido = await prisma.pizzaPedido.create({
            data: {
                pedidoId,
                pizzaId,
                valor,
                subtotal,
                quantidade
            }
        });

        return res.status(201).json(pizzapedido);
    } catch (error) {
        console.error(error); // Adicionando log para entender melhor o erro
        return res.status(400).json({ error: error.message });
    }
}

const read = async (req, res) => {
    try {
        const pizzapedidos = await prisma.pizzaPedido.findMany();
        return res.json(pizzapedidos);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const readOne = async (req, res) => {
    try {
        const pizzapedido = await prisma.pizzaPedido.findUnique({
            select: {
                id: true,
                pizzaId: true,
                pedidoId: true,
                valor: true,
                subtotal: true,
                quantidade: true,
                pizza: true,
                pedido: true
            },
            where: {
                id: Number(req.params.id)
            }
        });
        return res.json(pizzapedido);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const update = async (req, res) => {
    try {
        const pizzapedido = await prisma.pizzaPedido.update({
            where: {
                id: Number(req.params.id)
            },
            data: req.body
        });
        return res.status(202).json(pizzapedido);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const remove = async (req, res) => {
    try {
        await prisma.pizzaPedido.delete({
            where: {
                id: Number(req.params.id)
            }
        });
        return res.status(204).send();
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
}

module.exports = { create, read, readOne, update, remove };
