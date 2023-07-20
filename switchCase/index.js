//é uma estrutura para fazer uma condição

//exemplo, quero saber qual dia da semana que é hoje e voltar o nome dele no console.log

/* Dias da semana no javascript
0- Domingo
1-Segunda
2- Terça
3- Quarta
4- Quinta
5- Sexta
6- Sábado
*/

const data = new Date(); //pegando a data atual
console.log(data.toString()); //colocando ela em formato gringo
const dia = data.getDay(); //pegando o número do dia da semana.

console.log(dia) // estou mostrando no console.log que dia é hoje.

switch(dia) {
    case 0:
        console.log('Hoje é domingo!');
        break;
    case 1:
        console.log('Hoje é segunda');
        break;
    case 2: 
        console.log('Hoje é terça');
        break;
    case 3:
        console.log('Hoje é quarta');
        break;
    case 4: 
        console.log('Hoje é quinta');
        break;
    case 5:
        console.log('Hoje é sexta');
        break;
    case 6:
        console.log('Hoje é sábado');
        break;
    default:
        console.log('Não sei que dia é hoje, to bebado');
        break;
}