const banco = require('../db/banco');
const Conta = require('../model/Conta');

class ContaController {
    //GET ALL
    static contas(req, res){
       return res.json(banco.contas)
    }
    //POST
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
    //POST
    static depositar(req, res) {
        const {numConta, valor, descricao } = req.body;

        if (banco.contas.some((conta) => Number(numConta) === conta.conta) && Number(valor) > 0) {
            const conta = banco.contas.find((conta) => Number(numConta) === conta.conta)
            const indice = banco.contas.indexOf(conta)
            banco.contas[indice].saldo += Number(valor);
            banco.contas[indice].extrato.push({
                dataDeposito: new Date(), 
                valorDepositado: Number(valor), 
                descricao: descricao, 
                tipo: "Deposito"});
            return res.json({message: 'Deposito realizado'});
        }
        return res.status(400).json({message: 'Valor ou conta invalida'});
    }
    //POST
    static sacar(req, res) {
        const { valor } = req.body;
        const  {dadosConta}  = req;
       
        if (Number(valor) < 0) return res.json({message: 'Valor digitado invalido'});

        if (dadosConta.saldo < Number(valor)) return res.json({message: 'Saldo insuficiente'});               
      
        dadosConta.saldo -= Number(valor);
        dadosConta.extrato.push({dataDeposito: new Date(), valorDepositado: Number(valor), tipo: "Saque"});
        return res.json({message: 'Saque realizado'});
    
    }
    //GET ONE
    static extrato(req, res){
        const { dadosConta } = req; 

        const extrato = {
            cpf: dadosConta.cpf,
            extrato: dadosConta.extrato,
            saldo: dadosConta.saldo
        }

        return res.json(extrato);       

    }

}

module.exports = ContaController;