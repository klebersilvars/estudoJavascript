// uso para códigos que podem ser perigosos mais para frente e que pode parar o meu sistema.

/* bloco de código

try{

}catch(error) {
    aqui vai cair o erro que deu dentro do meu try
} */

//exemplo agora, uma console.log com uma variavel que não existe


try{
    console.log(varQueNaoExiste) // aqui ela vai tentar executar o código e se não conseguir vai cair no meu catch
}catch(error) {
    console.log('Algo deu errado, essa variavel não existe!');
    /* console.log(error); // aqui vai me dar mais informações do meu código que esta dando errado  */
}