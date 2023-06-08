const rota = require('express').Router();
const ClienteController = require('../controller/ClienteController');

rota.get('/clientes', ClienteController.clientes);
rota.get('/cliente/:cpf', ClienteController.cliente);
rota.post('/cadastrar', ClienteController.cadastrar);

module.exports = rota;