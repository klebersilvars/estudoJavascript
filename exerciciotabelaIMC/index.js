//declaração de variáveis
let buttonCalcular = document.querySelector(".calcularButton");
let mostrarResultado = document.querySelector(".resultadoPara");


buttonCalcular.addEventListener('click', function() {
    //to usando o parseFloat para converter string em números decimais
    let peso = parseFloat(document.querySelector(".pesoInput").value);
    let altura = parseFloat(document.querySelector(".alturaInput").value);

    //formula de calculo já pronto
    let imc = peso / (altura * altura) //efetuar o calculo do IMC

    const nivel = ["Abaixo do peso" , "Peso normal", 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2'];

    if (imc <= 18.5) {
        mostrarResultado.textContent = nivel[0];
      } else if (imc <= 24.9) {
        mostrarResultado.textContent = nivel[1];
      } else if (imc <= 29.9) {
        mostrarResultado.textContent = nivel[2];
      } else if (imc <= 34.9) {
        mostrarResultado.textContent = nivel[3];
      } else if (imc >= 39.9) {
        mostrarResultado.textContent = nivel[4];
      } 
    console.log(imc, mostrarResultado); // aqui estou fazendo um teste para verificar o que esta retornando nas minhas variaveis
});










