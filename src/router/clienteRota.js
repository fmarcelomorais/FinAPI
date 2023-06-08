const rota = require('express').Router();
const ClienteController = require('../controller/ClienteController');
const Cliente = require('../middleware/middlewares');

rota.get('/clientes', Cliente.authorization, ClienteController.clientes);
rota.get('/cliente', Cliente.authorization, Cliente.dadosCliente, ClienteController.cliente);
rota.post('/cadastrar', Cliente.authorization, Cliente.verificaSeClienteExiste, ClienteController.cadastrar);
rota.put('/editar', Cliente.authorization, Cliente.dadosCliente,  ClienteController.editar);
rota.delete('/deletar', Cliente.authorization, Cliente.dadosCliente,  ClienteController.deletar);

module.exports = rota;