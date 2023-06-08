const banco = require('../db/banco');

class Conta {
    conta = Math.abs(Number(Math.random()  * (1000 - 9999) + 1000).toFixed(1))
    dataAbertura = new Date();
    extrato = [];
    saldo = 0;

    constructor(Nomebanco, agencia, cpf){
        this.Nomebanco = Nomebanco;
        this.agencia = agencia;
        this.cpf = cpf;
    }
}

module.exports = Conta;