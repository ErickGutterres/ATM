import { exibirTelaDados } from "./exibirTelaDados.js";
import { exibirMenu } from "./exibirMenu.js";
import { telaInicial } from "./telaInicial.js";
import { removeDados } from "./removeDados.js";
import { conta } from "./criaConta.js";


export var valorSaldo = 0;
export var transacoes = [];



function verificaOpcao () {

    function transacao (nome, valor) {
        this.nome = nome;
        this.valor = valor
    }

function dinheiroSaque () {
    const money = document.querySelector(".money");
    money.style.animation = "";

    setTimeout(() => {
        money.style.visibility = "visible";
        money.style.animation = "money 3.7s"; 
    }, 10)

    
    
} 
        
    const campoTela = document.querySelector(".valor_n");
    const info = document.querySelector(".info");
    const opcao = info.childNodes[3].textContent;
    const valorLido = campoTela.textContent.slice(2);
    const valorLidoInt = parseInt(valorLido, 10);

    var n_transacao = parseInt(Math.random()*10000 + 1);
    
    
    if(opcao==="DADOS DO DEPÓSITO:"){

        if(Number.isNaN(valorLidoInt)){
            const botoes = document.querySelectorAll("[data-botao]");
            const info = document.querySelector(".info");
                info.innerHTML = (`
                <span>---------------------------------------------</span>
                <a>DEPÓSITO NÃO EFETUADO!</a>
                <span>---------------------------------------------</span>
                <div class="dados_atm">
                    <span>conta: ${conta}</span>
                    <span>N. Trans: ${n_transacao}</span>
                </div>
                `);
                botoes[6].style.visibility="hidden";
        } else {

             valorSaldo+=valorLidoInt;

            const botoes = document.querySelectorAll("[data-botao]");
            const info = document.querySelector(".info");
                info.innerHTML = (`
                <span>---------------------------------------------</span>
                <a>DEPÓSITO EFETUADO COM SUCESSO!</a>
                <span>---------------------------------------------</span>
                <div class="dados_atm">
                    <span>conta: ${conta}</span>
                    <span>N. Trans: ${n_transacao}</span>
                </div>
                `);
                botoes[6].style.visibility="hidden";
                var novaTransacao = new transacao("Depósito", valorLidoInt);
                transacoes.unshift(novaTransacao);
        }
                

            setTimeout(() => {
                info.remove();
                exibirTelaDados(0);
                exibirMenu(1);
                telaInicial(0);
                removeDados();
                
            }, 3500);
    }

    if(opcao==="SEU SALDO ATUALIZADO É:"){
        
    }

    if(opcao==="DADOS DO SAQUE:"){

        if(valorSaldo<valorLidoInt){

            const botoes = document.querySelectorAll("[data-botao]");
            const info = document.querySelector(".info");
                info.innerHTML = (`
                <span>---------------------------------------------</span>
                <a>SALDO INSUFICIENTE PARA SAQUE!</a>
                <span>---------------------------------------------</span>
                <div class="dados_atm">
                    <span>conta: ${conta}</span>
                    <span>N. Trans: ${n_transacao}</span>
                </div>
                `);
                botoes[6].style.visibility="hidden";

            setTimeout(() => {
                info.remove();
                exibirTelaDados(0);
                exibirMenu(1);
                telaInicial(0);
                removeDados();
                
            }, 3500);
        }

        else {

            if(Number.isNaN(valorLidoInt)){

                const botoes = document.querySelectorAll("[data-botao]");
                const info = document.querySelector(".info");
                info.innerHTML = (`
                <span>---------------------------------------------</span>
                <a>SAQUE NÃO EFETUADO!</a>
                <span>---------------------------------------------</span>
                <div class="dados_atm">
                    <span>conta: ${conta}</span>
                    <span>N. Trans: ${n_transacao}</span>
                </div>
                `);
                botoes[6].style.visibility="hidden";
                
                
            } else {
                
                valorSaldo-=valorLidoInt;
                const botoes = document.querySelectorAll("[data-botao]");
                const info = document.querySelector(".info");
                info.innerHTML = (`
                <span>---------------------------------------------</span>
                <a>SAQUE EFETUADO COM SUCESSO!</a>
                <span>---------------------------------------------</span>
                <div class="dados_atm">
                    <span>conta: ${conta}</span>
                    <span>N. Trans: ${n_transacao}</span>
                </div>
                `);
                
                dinheiroSaque();             
                botoes[6].style.visibility="hidden";
                var novaTransacao = new transacao("Saque", valorLidoInt);
                transacoes.unshift(novaTransacao);
            }

            setTimeout(() => {
                const money = document.querySelector(".money");
                money.style.visibility = "hidden";
                info.remove();
                exibirTelaDados(0);
                exibirMenu(1);
                telaInicial(0);
                removeDados();
                
            }, 3500);
        }
        
    }
}

export{verificaOpcao};