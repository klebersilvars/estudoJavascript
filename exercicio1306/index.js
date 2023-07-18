const form = document.querySelector(".form-container");
const resultado = document.querySelector(".lista");





let button = document.querySelector(".button");

let nome = document.querySelector(".inputNome");
let sobreNome = document.querySelector(".inputSobrenome");
let peso = document.querySelector(".inputPeso");
let altura = document.querySelector(".inputAltura");
let li = document.querySelector(".li");

const infos = []

button.addEventListener("click", function() {
    infos.push({
        nome: nome.value,
        sobreNome: sobreNome.value,
        peso: peso.value,
        altura: altura.value
    })
    console.log(infos)

});



