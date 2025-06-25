//FUNÇÃO EXIBIR INFO SAQUE NA TELA

import { conta } from "./criaConta.js";

const saque = (() => {
    const dados = document.querySelector(".dados");
    const nova_div = document.createElement("div");

    var n_transacao = parseInt(Math.random()*10000 + 1);
    
    nova_div.setAttribute("class", "info");
    nova_div.innerHTML = (`
    
        <span>---------------------------------------------</span>
        <span class="titulo_info">DADOS DO SAQUE:</span>
        <a>Informe o valor do saque<br>e pressione ENTRA</a>
        <span class="valor">Valor:</span>
        <span class="valor_n">R$ </span>
        <a class="a_valor">,00</a>
        <span>---------------------------------------------</span>
        <div class="dados_atm">
            <span>conta: ${conta}</span>
            <span>N. Trans: ${n_transacao}</span>
        </div>
    
    `);

    dados.appendChild(nova_div);
    return dados;
});

export {saque};