import { conta } from "./criaConta.js";
import { valorSaldo } from "./valorSaldo.js";


//INSERE AS INFORMAÇÕES DO SALDO NA TELA

const saldo = (() => {

    var nTransacao = parseInt(Math.random()*10000 + 1);
    const dados = document.querySelector(".dados");
    const novaDiv = document.createElement("div");
    
    novaDiv.setAttribute("class", "info");
    novaDiv.innerHTML = (`
    
        <span>---------------------------------------------</span>
        <span class="titulo_info">SEU SALDO ATUALIZADO É:</span>
        <span class="valor">Valor:</span>
        <span class="valor_n">R$ ${valorSaldo.toFixed(2)}</span>
        <span>---------------------------------------------</span>
        <div class="dados_atm">
            <span>conta: ${conta}</span>
            <span>N. Trans: ${nTransacao}</span>
        </div>`
        
    );
    dados.appendChild(novaDiv);
    return dados;
});

export {saldo};