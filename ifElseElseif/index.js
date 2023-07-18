// Eu uso para fazer uma condição no meu código

// IF = é a mesma coisa que "SE"

// else = é a mesma coisa que "Se Não"

// else if = é a mesma coisa que "Se não, se".

// exemplo:

// quero conferir se a hora está de manhã, se estiver, vou retornar um código dizendo bom dia, se não, dizendo que está em outro horário

let hora = 13;

if(hora  < 12) {
    console.log("Bom dia")
}else (
    console.log("Erro no código")
)


// o else if = uso para fazer mais de uma condição na mesma expressão

// REGRAS

// IF PODE SER USADO SOZINHO

// ELSE SÓ PODE SER USADO SE TIVER UM "IF" ANTES

// não posso usar um "else if" depois de um "else".

const idadeJoao = 20;

if(idadeJoao === 20) {
    console.log(`João tem uma idade de ${idadeJoao} anos`)
}

