
async function requisicao(){
    const baseurl = "http://localhost:3333";
    const requisicao = await fetch(`${baseurl}/clientes/clientes`,{
        headers:{
            'token':'minhachavesecreta'
        }
    } )
    
    const data = await requisicao.json();
    const dados = await data;
    const clientes = await dados.clientes;
    if(!clientes) {
        alert("Nenhum cliente encontrado");
        return 
    }
    clientes.forEach(cliente => {
        const tbody = document.querySelector('.clientes');

        let dados =`
        <tr class="">
            <td>${cliente.nome}</td>
            <td>${cliente.cpf}</td>
        </tr>
        `
        tbody.innerHTML += dados
    });
    
}

const btn = document.getElementById('btn')
window.addEventListener('load', requisicao)

