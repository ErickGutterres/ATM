//FUNÇÃO REMOVER INFO DEPÓSITO DA TELA

const depositoRemove = (() => {
    const dados = document.querySelector(".dados");
    const info = document.querySelector(".info");
    const div_removida = dados.removeChild(dados.lastChild);
    return div_removida;
});

export {depositoRemove};