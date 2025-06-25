
//FUNÇÃO EXIBIR INFORMAÇÕES DO DEPÓSITO NA TELA

import { conta } from "./criaConta.js";

const deposito = (() => {

    var nTransacao = parseInt(Math.random()*10000 + 1);

    const dados = document.querySelector(".dados");
    const nova_div = document.createElement("div");
    nova_div.setAttribute("class", "info");
    
    nova_div.innerHTML = (`
    
        <span>---------------------------------------------</span>
        <span class="titulo_info">DADOS DO DEPÓSITO:</span>
        <a>Informe o valor do depósito<br>e pressione ENTRA</a>
        <span class="valor">Valor:</span>
        <span class="valor_n">R$ </span>
        <a class="a_valor">,00</a>
        <span>---------------------------------------------</span>
        <div class="dados_atm">
            <span>conta: ${conta}</span>
            <span>N. Trans: ${nTransacao}</span>
        </div>
    
    `);

    dados.appendChild(nova_div);
    return dados;
});

export {deposito};