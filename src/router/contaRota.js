const rota = require('express').Router();
const ContaController = require('../controller/ContaController')
const middleware = require('../middleware/middlewares');

rota.get('/contas', ContaController.contas);
rota.post('/abrir', ContaController.abrir);
rota.post('/depositar', middleware.verificaSeContaExiste, ContaController.depositar);
rota.post('/sacar', middleware.verificaSeContaExiste, ContaController.sacar);

module.exports = rota;