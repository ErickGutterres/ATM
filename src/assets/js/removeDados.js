//REMOVE AS INFORMAÇÕES DO SALDO DA TELA

const removeDados = (() => {
    const dados = document.querySelector(".dados");
    const info = document.querySelector(".info");
    const valorN = document.querySelector(".valor_n");

    function removeElementTransacao () {
        const elementTransacao = document.querySelector(".elementTransacao");
        const paiElementTransacao = elementTransacao.parentNode;
        paiElementTransacao.removeChild(elementTransacao,info);
    }

    const texto = "R$";
    
    const zeraElemento = document.createElement("span");
    zeraElemento.setAttribute("class", "valor_n");
    zeraElemento.append(texto);

    const oldChild = valorN.parentNode;

    oldChild.replaceChild(zeraElemento,valorN);

    const div_removida = dados.removeChild(info);
    removeElementTransacao();

    return div_removida;
    
});

export {removeDados};