export var verificaMenuAtivo=0;

const exibirMenu = ((a) => {
    const menu = document.querySelector(".menu");
    const botao_voltar_click = document.querySelector(".botao_voltar_click");
    
    if(a===1){
        menu.style.visibility="visible";
        botao_voltar_click.style.visibility="hidden";
        verificaMenuAtivo=1;
        
    } else {
        menu.style.visibility="hidden";
        botao_voltar_click.style.visibility="visible";
        verificaMenuAtivo=0;
    }

});

export {exibirMenu};