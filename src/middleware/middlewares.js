const banco = require('../db/banco');
class verify{
    static verificaSeContaExiste( req, res, next ) {
        const { token } = req.headers;
        if (!banco.contas.some((conta) => token === conta.cpf)){
            return res.json({message: 'Conta invalida'});
        }
        const dadosConta = banco.contas.find((conta) => token === conta.cpf)
        req.info = dadosConta;
        return next();
    
    }

    static verificaSeClienteExiste( req, res, next ) {
        const { token } = req.headers;
        if (!banco.clientes.some((conta) => Number(token) === conta.cpf)){
            return res.json({message: 'Conta invalida'});
        }
        const dadosCliente = banco.clientes.find((conta) => token === conta.cpf)
        req.info = dadosCliente;
        return next();
    
    }

}

module.exports = verify;