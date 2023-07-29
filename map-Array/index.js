// map serve para a mesma coisa que o filter, mas ele tem uma diferença pequena, ele altera o meu array.

// EXEMPLO, DOBRE OS VALORES DO MEU ARRAY.

const numeros = [10, 20, 30, 40, 50, 60, 70];

const numerosDobrados = numeros.map( indice => {
    return indice * 2
})

console.log(numerosDobrados)

const pessoas = [
    {nome: 'Kleber', idade: 30},
    {nome: 'Renato', idade: 29},
    {nome: 'Guilherme', idade: 35},
    {nome: 'Pedro', idade: 19},
    {nome: 'Maria', idade: 32},
]

const nomePessoa = pessoas.map(  (valor)=> {
    return valor.nome;
})

console.log(nomePessoa)