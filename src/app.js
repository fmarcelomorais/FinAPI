const express = require('express');
const app = express();
const cors = require('cors');

const rotaClientes = require('./router/clienteRota');
const rotaContas = require('./router/contaRota');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(
    cors({
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization', 'token', 'access-control-allow-origin'],
        credentials: true,
        optionsSuccessStatus: 200,
        maxAge: 86400
    })
);
app.use('/clientes', rotaClientes)
app.use('/contas', rotaContas)

module.exports = app;