//FUNÇÃO EXIBIR INFO DE SERVIÇO INDISPONÍVEL NA TELA

const servicoIndisponivel = (() => {
    const dados = document.querySelector(".dados");
    const nova_div = document.createElement("div");
    nova_div.setAttribute("class", "tela_servicoIndisponivel");
    nova_div.innerHTML = (`
    
        <span>ATM<br>SERVIÇO INDISPONÍVEL</span>
    
    `);

    dados.appendChild(nova_div);
    return dados;
});

export {servicoIndisponivel};