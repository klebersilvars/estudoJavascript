// uso para filtrar o meu array e retornar os elementos filtrados.

const numeros = [5,4,3,2,1,40,50,10,9,35,23];

console.log(numeros)


const numerosFiltrados = numeros.filter(function(valor, indice, array) {
    return valor > 10
})
console.log(numerosFiltrados)


// me retorne os valores dos nomes das pessoas que possuem mais de 5 letras.

const pessoas = [
    { nome: 'Kleber', idade: 29 },
    { nome: 'João', idade: 19 },
    { nome: 'Pedro', idade: 20 },
    { nome: 'Renato', idade: 35 },
    { nome: 'Renata', idade: 40},
];

const pessoasNovas = pessoas.filter(function(valor) {
    return valor.nome.length > 5
})

console.log(pessoasNovas)