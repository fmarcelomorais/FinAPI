const banco = require('../db/banco');
const Conta = require('../model/Conta');

class ContaController {

    static contas(req, res){
       return res.json(banco.contas)
    }

    static abrir(req, res){
        const { Nomebanco, agencia, cpf } = req.body;
        const conta = new Conta(Nomebanco, agencia, cpf);
        try {
            banco.contas.push(conta);
            res.status(201).json({message: 'Ok'});
        } catch (error) {
            res.json({message: error.message});
        }
    }

    static depositar(req, res) {
        const {numConta, valor} = req.body;

        if (banco.contas.some((conta) => Number(numConta) === conta.conta) && Number(valor) > 0) {
            const conta = banco.contas.find((conta) => Number(numConta) === conta.conta)
            const indice = banco.contas.indexOf(conta)
            banco.contas[indice].saldo += Number(valor);
            banco.contas[indice].extrato.push({dataDeposito: new Date(), valorDepositado: Number(valor), tipo: "Deposito"});
            return res.json({message: 'Deposito realizado'});
        }
        return res.status(400).json({message: 'Valor ou conta invalida'});
    }

    static sacar(req, res) {
        const {numConta, valor} = req.body;

        if (banco.contas.some((conta) => Number(numConta) === conta.conta) && Number(valor) > 0) {
            const conta = banco.contas.find((conta) => Number(numConta) === conta.conta)
            if(conta.saldo < Number(valor) ) {
                return res.json({message: 'Saldo insuficiente'});    
            }
            const indice = banco.contas.indexOf(conta)
            banco.contas[indice].saldo -= Number(valor);
            banco.contas[indice].extrato.push({dataDeposito: new Date(), valorDepositado: Number(valor), tipo: "Saque"});
            return res.json({message: 'Saque realizado'});
        }
        return res.status(400).json({message: 'Valor ou conta invalida'});
    }

    static extrato(req, res){
        
    }

}

module.exports = ContaController;