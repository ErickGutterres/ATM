import { conta, criaConta } from "./criaConta.js";
import { telaInicial } from "./telaInicial.js";

const buttonForm = document.querySelector(".button");

function loading () {
    const atm = document.querySelector(".atm");
    const cadastro = document.querySelector(".cadastro");
    cadastro.style.visibility="hidden";
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", "loading");
    atm.appendChild(newDiv);
    newDiv.style.visibility="visible";
    criaConta();

    newDiv.innerHTML=(`
        <svg>
            <circle r="25" cx="150" cy="75" stroke="#AA1803" stroke-width="5px" fill="none"></circle>
        </svg>
    `)

    function fimLoading () {
        const img = document.querySelector(".img");
        const newDiv = document.querySelector(".loading");
        newDiv.style.visibility="hidden";
        img.style.visibility="visible";
    
    }

    function mostraTelaInicial() {
        const dadosUsuario=document.querySelector(".dadosUsuario");
        dadosUsuario.style.visibility="visible";
        const nomeDigitado=document.querySelector("#input").value;
        const dadosUsuarioNome=dadosUsuario.childNodes[0].textContent+=nomeDigitado.toUpperCase();
        const dadosUsuarioConta=dadosUsuario.childNodes[1].textContent+=conta;
        telaInicial(1);
        
    }

    removeEventButtonForm();
    setTimeout(fimLoading, 2900);
    setTimeout(mostraTelaInicial, 4000);
}

function removeEventButtonForm () {
    buttonForm.removeEventListener("click", loading);
}

export {loading};