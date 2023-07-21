// uma estrutura de repetição parecida com o for, porém, mais curta na forma de escrever o código.

const frutas = ['Maçã', 'Uva', 'Pera'];

for (let i in frutas) {
    console.log(frutas[i]); // esta me retornando todos os nomes que tem no meu array.
}

const pessoas = {
    nome: 'Kleber',
    sobrenome: 'Lucas',
    idade: 30
}

for (let chave in pessoas) {
    console.log(chave, pessoas[chave]) // vai me retornar tudo que está acima na ordem exata que foi escrito
}