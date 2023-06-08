const Cliente = require('../model/Cleinte');
const banco = require('../db/banco');

class ClienteController {

    //GET
    static clientes( req, res){        
        return res.json({clientes: banco.clientes});
    }
    //GET ONE
    static cliente(req, res){
        const { dadosCliente } = req;
        return res.json(dadosCliente);
    }
    //POST
    static cadastrar(req, res){
        const { nome, cpf } = req.body;

        const cliente = new Cliente(nome, cpf);
        try {
            banco.clientes.push(cliente);
            return res.status(201).json({message: 'OK'});
        } catch (error) {
           return res.json(error.message); 
        }
    }
    //PUT
    static editar(req, res){   
        const { nome } = req.body;
        const { dadosCliente } = req;

        if(dadosCliente){
            dadosCliente.nome = nome;
            return res.json(dadosCliente);
        }       

        return res.json({message:'Cliente não cadastrado'});
    }
    //DELETE
    static deletar(req, res) {
        const { dadosCliente } = req;

        if(dadosCliente){
            const idCliente = banco.clientes.indexOf( dadosCliente );

            const conta = banco.contas.find((conta) => dadosCliente.cpf === conta.cpf)
            const idConta = banco.contas.indexOf(conta)
           
            if(conta.saldo > 0){
                return res.json({message: 'Cliente com saldo em conta'});
            }

            if(idConta != -1 && conta.saldo == 0)
                banco.contas.splice(idConta, 1);

            banco.clientes.splice(idCliente, 1);
            return res.json({message: 'Deletado'});
        }       

        res.json({message:'Cliente não cadastrado.'});
    }

}

module.exports = ClienteController;