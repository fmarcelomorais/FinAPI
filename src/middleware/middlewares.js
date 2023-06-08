const banco = require('../db/banco');
require('dotenv').config();

class Verify {

    static authorization(req, res, next){
        const { token } = req.headers;
        if(token != process.env.TOKEN){
            return res.json({message: 'Acesso não autorizado!'});    
        }
        return next();
    }

    static verificaSeContaExiste( req, res, next ) {
        const { numConta } = req.body || req.params;

        const contaExiste = banco.contas.some((cliente) => Number(numConta) === cliente.conta)

        if (!contaExiste){
            return res.json({message: 'Conta Invalida'});
        }

        return next();  
  
    }

    static verificaSeClienteExiste( req, res, next ) {
        const { cpf } = req.body;
        
        const clienteExiste = banco.clientes.some((cliente) => cpf === cliente.cpf)
    
        if (clienteExiste){
            return res.json({message: 'Cliente já cadastrado'});
        }
        return next();    
    }

    static dadosCliente(req, res, next) {
        const { cpf } = req.body;
        const dadosCliente = banco.clientes.find((cliente) => cpf === cliente.cpf)
        req.dadosCliente = dadosCliente;
        return next();        
    }

    static dadosConta(req, res, next) {
        const { numConta } = req.body;
        const dadosConta = banco.contas.find((cliente) => Number(numConta) === cliente.conta)
        req.dadosConta = dadosConta;
        return next();        
    }

}

module.exports = Verify;