//serve para reduzir um array a um unico elemento 

//exemplo abaixo

//Ele recebe uma função de callback nova, se chama acumulador

//quero a soma de tudo dentro do meu array

const numeros = [10,20,30,40,50]

const soma = numeros.reduce( (acumulador, valor)   => {
    return acumulador + valor
}, 0)

console.log(soma) //me retornou a soma de todos os elementos dentro de um array