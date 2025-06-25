//Funções DATA

const data = (() => { 
    const data=new Date().toLocaleDateString("pt-BR", {day:"2-digit", month:"short", year:"numeric"})
    return data;
});

export {data};