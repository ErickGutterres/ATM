import { transacoes, valorSaldo } from "./valorSaldo.js";
import { conta } from "./criaConta.js";

//FUNÇÃO EXIBIR EXTRATO NA TELA

const extrato = (() => {

    const dados = document.querySelector(".dados");
    const elementTransacao = document.createElement("div");
    elementTransacao.setAttribute("class", "elementTransacao");
    dados.appendChild(elementTransacao);
    const length = transacoes.length;

    var n_transacao = parseInt(Math.random()*10000 + 1);

    if(length===0){
        
        const dados = document.querySelector(".dados");
        const nova_div = document.createElement("div");

        var n_transacao = parseInt(Math.random()*10000 + 1);

        nova_div.setAttribute("class", "info");
        nova_div.innerHTML = (`

            <span class="titulo_info">MOVIMENTOS DA CONTA:</span>
            <span>---------------------------------------------</span>
            <span>CONTA SEM MOVIMENTAÇÃO</span>
            <span class="valor">Saldo disponível:</span>
            <span class="valor_n">R$ ${valorSaldo}</span>
            <a class="a_valor">,00</a>
            <span>---------------------------------------------</span>
            <div class="dados_atm">
                <span>conta: ${conta}</span>
                <span>N. Trans: ${n_transacao}</span>
            </div>
        
        `);

        dados.appendChild(nova_div);
        return dados;
    }

    else if(length>0){

        const dados = document.querySelector(".dados");
        const nova_div = document.createElement("div");

        var n_transacao = parseInt(Math.random()*10000 + 1);

        nova_div.setAttribute("class", "info");
        nova_div.innerHTML = (`

            <span class="titulo_info">MOVIMENTOS DA CONTA:</span>
            <span>---------------------------------------------</span>
            <span class="valor">Saldo disponível:</span>
            <span class="valor_n">R$ ${valorSaldo}</span>
            <a class="a_valor">,00</a>
            <span>---------------------------------------------</span>
            <div class="dados_atm">
                <span>conta: ${conta}</span>
                <span>N. Trans: ${n_transacao}</span>
            </div>
        
        `);
        dados.appendChild(nova_div);

        transacoes.forEach(transacao => {
            
            const findElementTransacao = document.querySelector(".elementTransacao");
            const childFindElementTransacao = document.createElement("div");
            childFindElementTransacao.innerHTML=`
            
            ${transacao.nome} executado no valor de R$ ${transacao.valor},00
            
            <br>
            
            `;
            
            findElementTransacao.appendChild(childFindElementTransacao);
        })    

    }

    
});

export {extrato};
