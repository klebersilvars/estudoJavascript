let boxContainer = document.querySelector('.box-container');

const data = new Date();
console.log(data.toString());

let diaSemana = data.getDay();
let ano = data.getFullYear();
let mes = data.getMonth();
let hora = data.getHours();
let minuto = data.getMinutes();
let dia = data.getDate();

console.log(diaSemana, ano, mes, hora, minuto, dia);

let verificarDiaSemana;

const dias = ['Domingo', 'Segunda-feira', 'Terça-Feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

let verificarMes;

switch(mes) {
    case 0:
        verificarMes = meses[0];
        break;
    case 1: 
        verificarMes = meses[1];
        break;
    case 2:
        verificarMes = meses[2];
        break
    case 3:
        verificarMes =  meses[3];
        break;
    case 4:
        verificarMes =  meses[4];
        break;
    case 5:
        verificarMes =  meses[5];
        break;
    case 6:
        verificarMes =  meses[6];
        break;
    case 7:
        verificarMes = meses[7];
        break;
    case 8:
        verificarMes = meses[8];
        break;
    case 9:
        verificarMes = meses[9];
        break;
    case 10:
        verificarMes = meses[10];
        break;
    case 11:
        verificarMes = meses[11];
        break;
    default: 
    verificarMes = '';
    break;
}


console.log(verificarMes)

switch (diaSemana) {
    case 0:
        verificarDiaSemana = dias[0];
        break;
    case 1:
        verificarDiaSemana = dias[1];
        break;
    case 2:
        verificarDiaSemana = dias[2];
        break
    case 3:
        verificarDiaSemana = dias[3];
        break;
    case 4:
        verificarDiaSemana = dias[4];
        break;
    case 5:
        verificarDiaSemana = dias[5];
        break;
    case 6:
        verificarDiaSemana = dias[6];
        break;
    default:
        verificarDiaSemana = '';
        break;
}


let paragrafo = document.createElement('h2');
let fraseFinal = `${verificarDiaSemana}, ${dia} de ${verificarMes}  do ano de  ${ano}, ás ${hora}:${minuto}`;


function adicionar() {
    paragrafo.textContent = fraseFinal;
    boxContainer.appendChild(paragrafo);
}

adicionar()