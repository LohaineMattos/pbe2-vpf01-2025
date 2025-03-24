const express = require('express');
const routes = express.Router();

const Cliente = require('./controllers/cliente');
const Pedido = require('./controllers/pedido');
const Pizza = require('./controllers/pizza');
const PizzaPedido = require('./controllers/pizzapedido');

routes.get('/', (req, res) => {
  return res.json({ titulo: 'Escola Superior PW' });
});

routes.post('/clientes', Cliente.create);
routes.get('/clientes', Cliente.read);
routes.get('/clientes/:id', Cliente.readOne);
routes.put('/clientes/:id', Cliente.update);
routes.delete('/clientes/:id', Cliente.remove);

routes.post('/pedidos', Pedido.create);
routes.get('/pedidos', Pedido.read);
routes.get('/pedidos/:id', Pedido.readOne);
routes.put('/pedidos/:id', Pedido.update);
routes.delete('/pedidos/:id', Pedido.remove);

routes.post('/pizzas', Pizza.create);
routes.get('/pizzas', Pizza.read);
routes.get('/pizzas/:id', Pizza.readOne);
routes.put('/pizzas/:id', Pizza.update);
routes.delete('/pizzas/:id', Pizza.remove);

routes.post('/pizzapedidos', PizzaPedido.create);
routes.get('/pizzapedidos', PizzaPedido.read);
routes.get('/pizzapedidos/:id', PizzaPedido.readOne);
routes.put('/pizzapedidos/:id', PizzaPedido.update);
routes.delete('/pizzapedidos/:id', PizzaPedido.remove);

module.exports = routes;