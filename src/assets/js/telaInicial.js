const telaInicial = ((a) => {
    const tela = document.querySelector(".tela");

    if(a===1){
        tela.style.visibility="visible";

    } else {
        tela.style.visibility="hidden";
    }

    return a;
});

export {telaInicial};