//como consigo copiar o valor de um array para outro?

//uso o operador chamado "SPREAD"

//EXEMPLO ABAIXO:

let a = [1, 2, 3, 4]
let b = [...a]

console.log(a, b)


//O que são dados primitivos?

//São dados que são "imutáveis", significa que eles não mudam!!!!

//dados primitivos:  String, Number, Boolean, Null, Undefined

//exemplo no código

let c = "Luiz"   //string
let d = "Ronaldo" //string
let numero = 9 //number

console.log(c, d)
console.log(numero)

//--------------------------------------------------------------------------------

//O que são os dados referenciais?

//São dados que são mutáveis

//Dados referenciais: array, objetos e funções

//exemplo de objeto

const pessoa = {  //objeto
    nome: "Kleber",
    sobrenome: "Lucas",
    idade: 19
}

console.log(pessoa)

//exemplo de array

let profissao = ["Programador", "Médico", "Professor", "Militar"]  //array de profissoes

console.log(profissao[0])
console.log(profissao[3])

let descricao = `O meu vizinho é um ${profissao[3]}, e tem a idade de ${pessoa.idade} anos.`

console.log(descricao)
