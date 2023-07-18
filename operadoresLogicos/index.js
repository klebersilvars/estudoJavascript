//usado para fazer ou checar mais de uma comparação

//operadores lógicos são: 

// && -> E

// || -> OU

// ! -> Negação

// no && todas as expressões precisam ser verdadeiras!!

// exemplo de como utilizar algum operador lógico na prática

// Nesse exemplo eu irei ver se a senha e o usuário são iguais

let usuario = 'Luiz'
let senha = '123456'

console.log(usuario === 'Luiz' && senha === '123456') // isso aqui terá que me retornar true, porque tudo deu verdadeiro.


//agora iremos testar o que vai aparecer se eu colocar a senha errada.

console.log(usuario === 'Renato' && senha === '321') // isso terá que me retornar false, pq nenhuma das duas expressões foram corretas.



// o de negação "!", funciona como uma coisa contrária da outra, exemplo abaixo

// a negação de false é true, então ficaria

console.log(!false) // isso terá que aparecer true, pq usei a negação do false.

console.log (!true) // isso terá que me retornar false, pq usei a negação do true