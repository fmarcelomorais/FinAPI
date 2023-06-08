const express = require('express');
const app = express();

const rotaClientes = require('./router/clienteRota');
const rotaContas = require('./router/contaRota');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/clientes', rotaClientes)
app.use('/contas', rotaContas)

module.exports = app;