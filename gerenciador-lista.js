let insereTarefa = document.getElementById('botao-cadastrar');
let textoDigitado = document.getElementById('tarefa');
let lista = document.getElementById('lista');
let listaTarefas = [];


insereTarefa.addEventListener('click', function () {
    let novaTarefa = document.createElement('li');

    let botaoCheckBox = document.createElement('input');
    botaoCheckBox.type = 'checkbox';
    botaoCheckBox.id = 'check-conclusao';

    let textoTarefa = document.createElement('span');
    textoTarefa.textContent = textoDigitado.value;

    let botaoExcluir = document.createElement('i');
    botaoExcluir.classList.add('fa', 'fa-trash');

    novaTarefa.appendChild(botaoCheckBox);
    novaTarefa.appendChild(textoTarefa);
    novaTarefa.appendChild(botaoExcluir);

    botaoExcluir.addEventListener('click', function () {

        let index = listaTarefas.indexOf(novaTarefa.textContent); // procura o elemento que eu desejo apagar
        if (index !== -1) { // se der -1 quer dizer que não encontrou nada
            listaTarefas.splice(index, 1); //removo o elemento do array, o 1 é qntos elementos vou apagar
        }
        novaTarefa.remove(); // removo do dom
    });

    lista.appendChild(novaTarefa);
    listaTarefas.push(textoDigitado.value);
    textoDigitado.value = '';
});
