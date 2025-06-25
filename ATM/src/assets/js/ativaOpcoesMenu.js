import {saldo} from "./saldo.js";
import {removeDados} from "./removeDados.js";
import {deposito} from "./deposito.js";
import {extrato} from "./extrato.js";
import {saque} from "./saque.js";
import {exibirTelaDados} from "./exibirTelaDados.js";
import {servicoIndisponivel} from "./servicoIndisponivel.js";
import {servicoIndisponivelRemove} from "./servicoIndisponivelRemove.js";
import {valorDigitado} from "./valorDigitado.js";
import {telaInicial} from "./telaInicial.js";
import {exibirMenu} from "./exibirMenu.js";

function ativaOpcoesMenu () {

    const botoesATM = document.querySelectorAll("[data-botao]");
    const dados = document.querySelector(".dados");
    const menu = document.querySelector(".menu");
    const verificaTelaInicial = 0;
    

    botoesATM.forEach(botao => {
        botao.addEventListener("click", leTeclas);
    });


    function leTeclas (Event) {

        //TELA MENU

        //SALDO

        if(Event.target.className==="botaoLateral1" && menu.style.visibility==="visible"){
            exibirMenu(0);
            exibirTelaDados(1);
            saldo();
            

        //DEPÓSITO

        } else if(Event.target.className==="botaoLateral2" && menu.style.visibility==="visible"){
            exibirMenu(0);
            exibirTelaDados(1);
            deposito();
            valorDigitado();

        //EXTRATO

        } else if(Event.target.className==="botaoLateral3" && menu.style.visibility==="visible"){
            exibirMenu(0);
            exibirTelaDados(1);
            extrato();

        //SAQUE

        } else if(Event.target.className==="botaoLateral4" && menu.style.visibility==="visible"){
            exibirMenu(0);
            exibirTelaDados(1);
            saque();
            valorDigitado();

        //PAGAMENTOS

        } else if(Event.target.className==="botaoLateral5" && menu.style.visibility==="visible"){
            exibirMenu(0);
            exibirTelaDados(1);
            servicoIndisponivel();

        //SERVIÇOS
            
        } else if(Event.target.className==="botaoLateral6" && menu.style.visibility==="visible"){
            exibirMenu(0);
            exibirTelaDados(1);
            servicoIndisponivel();

        //BOTAO VOLTAR
            
        } else if(Event.target.className==="botao_voltar_click" && document.querySelector(".dados").lastElementChild.className==="tela_servicoIndisponivel"){
            servicoIndisponivelRemove();
            exibirTelaDados(0);
            exibirMenu(1);
            telaInicial(0);

        } else if(Event.target.className==="botao_voltar_click" && document.querySelector(".dados").lastElementChild.className==="info" || document.querySelector(".dados").lastElementChild.className==="hora" || document.querySelector(".dados").lastElementChild.className==="elementTransacao"){
            exibirTelaDados(0);
            exibirMenu(1);
            telaInicial(0);
            removeDados(); 

        }
    };
}

export {ativaOpcoesMenu};