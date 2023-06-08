const banco = require('./src/db/banco');
const cpfTeste = "60032679335"

const a = banco.clientes.some((cpf) => cpfTeste === cpf.cpf)
const cliente = banco.clientes.find((cpf) => cpfTeste === cpf.cpf)
const conta = banco.contas.find((conta) => cpfTeste === conta.cpf)
const id = banco.contas.indexOf(conta)
const hoje = new Date();
console.log(hoje.toString() > conta.dataAbertura.toString() )
console.log(new Date(conta.dataAbertura.toString()), hoje )
const data1 = new Date();