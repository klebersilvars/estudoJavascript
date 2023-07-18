//como consigo criar meus objetos?

//const pessoa1 = {
    //nome: "Luiz", 
    //sobrenome: "Miranda",
    //idade: 25
//}

//vou colocando meus atributos dentro do meu objeto.

//coloco um atributo, para por outro eu acrescento a virgula e adiciono outro como o exemplo acima.

//---------------------------SEPARACAO DE TÓPICO------------------------------

//COMO CONSIGO ACESSAR ALGUM OBJETO QUE FOI ATRIBUIDO?

//console.log(pessoa1.nome)  //to acessando o nome que atribui no meu objeto
//console.log(pessoa1.sobrenome) //to acessando o sobrenome que atribui no meu objeto
//console.log(pessoa1.idade)  // to acessando a idade que atribui no meu objeto

//---------------------------SEPARACAO DE TÓPICO------------------------------

//como criar um objeto através de uma function

function criarPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
    }
}

const pessoa1 = criarPessoa("Luiz", "Miranda", 25) //enviei os argumentos para o meu parâmetro passado acima na função

console.log(pessoa1.nome)
console.log(pessoa1.sobrenome)
console.log(pessoa1.idade)