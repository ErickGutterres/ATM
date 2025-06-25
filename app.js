//IMPORT FUNÇÕES

import { loading } from "./src/assets/js/loading.js";
import {exibirMenu, verificaMenuAtivo} from "./src/assets/js/exibirMenu.js";
import {telaInicial} from "./src/assets/js/telaInicial.js";
import {ativaOpcoesMenu} from "./src/assets/js/ativaOpcoesMenu.js";

//PRIMEIRA TELA

const botoesATM = document.querySelectorAll("[data-botao]");
const dados = document.querySelector(".dados");
const menu = document.querySelector(".menu");
const botao_voltar_click = document.querySelector(".botao_voltar_click");
const cadastro = document.querySelector(".cadastro")
const buttonForm = document.querySelector(".button");
var telaInicio = telaInicial(0);
var verificaTelaInicial = 0;

botoesATM.forEach(botao => {
    botao.addEventListener("click", leTecla);
});

buttonForm.addEventListener("click", loading);

function leTecla (Event) {

    if(Event.target.className==="botaoentra" && verificaTelaInicial===0){
        telaInicial(0);
        exibirMenu(1);
        Event.stopImmediatePropagation();
        ativaOpcoesMenu();
        verificaTelaInicial=1;
    }

        else if(Event.target.className==="botaoanula" && verificaTelaInicial===1 && menu.style.visibility==="visible" && verificaMenuAtivo===0){
        exibirMenu(0);
        telaInicial(1);
        Event.stopImmediatePropagation();
        verificaTelaInicial=0;
    }
}

