//USO A PALAVRA RETURN

// serve para retornar algo 

// toda vez que uso ela em uma função, ela acaba

function soma(a, b) {
    return a + b
    
}

soma(2,7)
console.log(soma(2,7))

 

function CriarPessoa (nome, sobrenome) {
    return {nome, sobrenome} // aqui está me retornando o valor dos meus parametros
}
                   
const p1 = CriarPessoa('Luiz', 'Araujo'); // estou atribuindo o valor do meu parametro na variavel p1
console.log(p1) //aqui estou exibindo o valor dos meus parametros