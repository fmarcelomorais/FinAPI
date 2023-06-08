const rota = require('express').Router();
const ContaController = require('../controller/ContaController')
const Conta = require('../middleware/middlewares');

rota.get('/contas', Conta.authorization, Conta.dadosConta, ContaController.contas);
rota.post('/abrir', Conta.authorization, ContaController.abrir);
rota.post('/depositar', Conta.authorization, Conta.verificaSeContaExiste, ContaController.depositar);
rota.post('/sacar', Conta.authorization, Conta.verificaSeContaExiste, Conta.dadosConta, ContaController.sacar);
rota.get('/extrato', Conta.authorization, Conta.verificaSeContaExiste, Conta.dadosConta, ContaController.extrato);

module.exports = rota;