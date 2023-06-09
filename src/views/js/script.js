
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
    const tbody = document.querySelector('.clientes');

     if(!clientes || clientes.length === 0) {
        tbody.innerHTML = "<h1>Clientes não encontrado</h1>";
        return 
    } 

    clientes.forEach(cliente => {
      //  const tbody = document.querySelector('.clientes');

        let dados =`
        <tr class="">
            <td>${cliente.nome}</td>
            <td>${cliente.cpf}</td>
        </tr>
        `
        tbody.innerHTML += dados
    });
    
}


window.addEventListener('load', requisicao)

