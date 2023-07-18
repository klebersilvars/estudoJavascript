const data = new Date();

// para criar o meu objeto DATE uso a palavra NEW, como está acima.

console.log(data)

console.log(data.toString()) // vai executar a data no formato gringo;

const criandoData = new Date(2023, 6, 18, 19,43,20); // aqui estou pegando as datas que estou passando nos parâmetros
console.log(criandoData.toString());

const dataPersonalizada = new Date('2023-07-29 20:29:10'); // consigo passar a data no formato String
console.log(dataPersonalizada.toString());


const dataAtual = new Date(); // aqui estou pegando a data Atual

console.log(dataAtual.toString());

// para pegar o dia da minha data, uso o data.getDate()
console.log('Dia', dataAtual.getDate());

//para pegar o mês da minha data, uso o data.getMonth()
console.log('Mês', dataAtual.getMonth());

// para pegar o ano da minha data, uso o data.getFullYear()
console.log('Ano', dataAtual.getFullYear());

//para pegar a hora da minha data, uso o data.getHours()
console.log('Hora', dataAtual.getHours());

//para pegar o minuto da minha data, uso o data.getMinutes()
console.log('Minutos', dataAtual.getMinutes());

//para pegar os segundos da minha data, uso o data.getSeconds()
console.log('Segundos', dataAtual.getSeconds());

//para pegar os milisegundos da minha data, uso o get.MiliSeconds()
console.log('Milisegundos', dataAtual.getMilliseconds());

//para pegar o número do dia da semana, uso o data.getDay()
console.log('Dia da semana em número', dataAtual.getDay());


//para formatar uma data.
const dataLo = new Date();
function formataData(dataLo) {
    console.log(dataLo.toString());
}

formataData(dataLo);

