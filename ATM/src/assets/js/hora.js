//Funções HORA

const hora = (() => {
    const hora=new Date().toLocaleTimeString("pt-BR", "00");
    return hora;
});

export {hora};