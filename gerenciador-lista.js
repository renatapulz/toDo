let insereTarefa = document.getElementById('botao-cadastrar');
let textoDigitado = document.getElementById('tarefa');
let lista = document.getElementById('lista');
let listaTarefas = [];

insereTarefa.addEventListener('click', function () {
    let novaTarefa = document.createElement('li');
    novaTarefa.textContent = textoDigitado.value;
    let botaoExcluir = document.createElement('i');
    botaoExcluir.classList.add('fa', 'fa-trash');
    novaTarefa.appendChild(botaoExcluir);
    lista.appendChild(novaTarefa);
    listaTarefas.push(textoDigitado.value);
    textoDigitado.value = '';
    console.log(listaTarefas);
});
