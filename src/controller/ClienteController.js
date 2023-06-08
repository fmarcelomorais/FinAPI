const Cliente = require('../model/Cleinte')
const banco = require('../db/banco')

class ClienteController{
    
    static clientes( req, res){
        res.json({clientes: banco.clientes});
    }

    static cliente(req, res){
        const { cpf } = req.params;
        
        const cliente = banco.clientes.find((cliente) => cpf === cliente.cpf)
        const conta = banco.contas.find((conta) => cpf === conta.cpf)

        res.json({cliente, conta})
    }

    static cadastrar(req, res){
        const { nome, cpf } = req.body;

        if (banco.clientes.some((cliente) => cpf === cliente.cpf)) 
            return res.status(404).json({message: 'Cleinte já cadastrado'});

        const cliente = new Cliente(nome, cpf);
        try {
            banco.clientes.push(cliente);
            return res.status(201).json({message: 'OK'});
        } catch (error) {
           return res.json(error.message); 
        }
    }

}

module.exports = ClienteController;