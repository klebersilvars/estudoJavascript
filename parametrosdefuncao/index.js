// Parâmetro é o nome que se da para a variável que nós declaramos na definição de uma função. 

//exemplo passando um parametro


            //meu parametro funciona como uma variavel
function oi(falaoi, x, y) {
    console.log(falaoi, x+y) //aqui estou exibindo o valor que foi atribuido na minha variavel(parametro)
}
    // estou declarando que esse valor está sendo passado para minha variavel(parametro) acima
oi('falando oi', 1, 2)


//abaixo outro exemplo


                // variaveis (parametros ) que estão recebendo o valor acima.
function teste(letra, frase, ...numeros) {
    console.log(letra,frase, numeros)
}

teste( 'x' ,'ola mundo',  10, 20, 30, 40) // ARGUMENTO QUE ESTOU PASSANDO PARA A MINHA VARIAVEL ACIMA, QUE SÃO OS MEUS PARÂMETROS!!