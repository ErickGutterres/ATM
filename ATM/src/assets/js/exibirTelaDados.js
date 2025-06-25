import {hora} from "./hora.js";
import {data} from "./data.js";

const horaAtuallizada = hora();
const dataAtuallizada = data();

//EXIBE A TELA PADRÃO QUE VAI ARMAZERNAR OS DADOS DE CADA OPÇÃO DO MENU

const exibirTelaDados = ((a) => {

    const tela_dados = document.querySelector(".tela_dados");
    const classHora = document.querySelector(".hora");
    const classData = document.querySelector(".data");

    classHora.innerText=horaAtuallizada;
    classData.innerText=dataAtuallizada;
    
    if(a===1){
        tela_dados.style.visibility="visible";
    } else {
        tela_dados.style.visibility="hidden";
    }
});

export {exibirTelaDados};