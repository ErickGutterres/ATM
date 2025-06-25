//FUNÇÃO REMOVER INFO SERVIÇO INDISPONÍVEL DA TELA

const servicoIndisponivelRemove = (() => {
    const dados = document.querySelector(".dados");
    const info = document.querySelector(".tela_servicoIndisponivel");
    const div_removida = dados.removeChild(dados.lastChild);
    return div_removida;
});

export {servicoIndisponivelRemove};