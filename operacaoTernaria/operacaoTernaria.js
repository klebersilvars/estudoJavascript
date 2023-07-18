// usando a operação ternaria consigo substituir o IF E ELSE no meu código.

// os sinais da operação TERNARIA são ? e :

//exemplo, quero saber se a pontuação do usuário é igual a 1000 ou maior, se for ele é um usuário VIP e se não for é usuario normal.

const pontuacaoUsuario = 999;

//exemplo abaixo é usando o if/else
/*
if(pontuacaoUsuario >= 1000) {
    console.log('Usuario Vip'); // vai executar essa linha de código.
}else {
    console.log('Usuario normal');
}
*/

//usando a operção ternaria.

//vou verificar se o usuario é vip ou normal por conta do nivel dela.
                     // minha condição         //true           //false        
const nivelUsuario = pontuacaoUsuario >=1000 ? 'Usuário VIP' : 'Usuario normal';
console.log(nivelUsuario);

const logarUsuario = true;

const acesso = logarUsuario == true ? 'Usuário logado' : 'Usuário não autorizado!'

console.log(acesso)