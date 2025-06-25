import {removeDados} from "./removeDados.js";
import { exibirMenu } from "./exibirMenu.js";
import { exibirTelaDados } from "./exibirTelaDados.js";
import { telaInicial } from "./telaInicial.js";
import { verificaOpcao } from "./valorSaldo.js";


function valorDigitado () {

    const botoes = document.querySelectorAll("[data-botao]");
    const campoTela = document.querySelector(".valor_n");
    const botooesNum = ["botao1","botao2","botao3","botao4","botao5",
    "botao6","botao7","botao8","botao9","botao0"];

    var menu;
    
    
    botoes.forEach(botao => {
        botao.addEventListener("click", insereValor);
    })
    

    function insereValor (Event) {

        if(Event.target.className==="botao_voltar_click"){
            
            removeEvents();
            
        }

        if(Event.target.className==="botaoanula" && document.querySelector(".dados").lastElementChild.className==="info"){
            exibirTelaDados(0);
            exibirMenu(1);
            telaInicial(0);
            removeDados();
            removeEvents();
            
        }

        if(Event.target.className==="botaoentra"){
            verificaOpcao();
            telaInicial(0);
            removeEvents();
        }

        if(Event.target.className==="botaocorrige"){
            campoTela.textContent="R$"
        }

        else {

            botooesNum.forEach(botao => {
                if(Event.target.className===botao){
                    campoTela.append(Event.target.textContent);
                }
            })

            
        }
        
    }

    
    function removeEvents () {

        for(let i=0; i<botoes.length; i++){
            botoes[i].removeEventListener("click", insereValor);
        }
        
    }     
};


export {valorDigitado};