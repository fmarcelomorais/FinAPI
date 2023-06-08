const banco = require('./src/db/banco');
const cpfTeste = "60032679335"

const a = banco.clientes.some((cpf) => cpfTeste === cpf.cpf)
const cliente = banco.clientes.find((cpf) => cpfTeste === cpf.cpf)
const conta = banco.contas.find((conta) => cpfTeste === conta.cpf)
const id = banco.contas.indexOf(conta)
console.log(cliente, conta, id)