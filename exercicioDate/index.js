let diaSemanaTexto = document.querySelector(".diaSemana");
let dataAtualTexto = document.querySelector(".dataAtual");
let horaTexto = document.querySelector(".hora");
let mesTexto;

let dataAtual = new Date();
let hora = dataAtual.getHours();
let diaSemana = dataAtual.getDay();
let mes = dataAtual.getMonth();
let ano = dataAtual.getFullYear();
let dia = dataAtual.getDate();


//aqui estou verificando qual dia da semana que estamos, ai eu coloco para mostrar o nome
switch (diaSemana) {
    case 6:
        diaSemanaTexto.textContent = 'Sábado,' 
        break;
}

// aqui estou verificnado o mês através dele, ai coloco a palavra junho
switch (mes) {
    case 5:
        mesTexto = 'junho'
}

//aqui estou verificando tudo para mostrar na tela.
switch(mes, ano, dia) {
    case 'junho', 2023, 24:
    dataAtualTexto.textContent =  `${dia} de ${mesTexto} de ${ano}, às ${hora} horas`     
}


// aqui estou fazendo um teste para colocar na tela do usuário
console.log(mes, dia, ano, hora, diaSemana)



