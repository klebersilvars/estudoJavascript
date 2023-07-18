let buttonTarefa = document.querySelector(".enviarTarefa");
let inputTarefa = document.querySelector('#input-tarefa');
let containerTarefas = document.querySelector('#tarefas');


buttonTarefa.addEventListener('click', function() {
  let tarefa = inputTarefa.value;


  // Limpando o valor do input
  inputTarefa.value = "";

  // Criando um novo elemento de lista
  let li = document.createElement("li");
  // Definindo o conteúdo do elemento de lista como a tarefa
  li.textContent = tarefa;
  // Adicionando o elemento de lista ao contêiner
  containerTarefas.appendChild(li); // nessa função aqui estou colocando tudo que está passando dentro da minha variavel 'tarefa' para o meu container de tarefas.
});