const inputTarefa = document.querySelector('.input-tarefa');
const btnaddTarefa = document.querySelector('.btn-add');
const Tarefa = document.querySelector('.tarefa');


document.addEventListener('click', (e) => {
    const el = e.target;
    if (el.classList.contains('list')) {
        DoneTask(el);
    }

    if (el.classList.contains('btn-remove')) {
        el.parentElement.remove();
        SaveTask();
    }
})
btnaddTarefa.addEventListener('click', () => {
    if (!inputTarefa.value) return;
        CriaTarefa(inputTarefa.value)
})

inputTarefa.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
         if (!inputTarefa.value) return;
        CriaTarefa(inputTarefa.value);
        
    }
});

function CriaTarefa(textinput) {

    const li = CriaLi();

    li.innerText = textinput;

    li.classList.add('list');

    CreateButon(li);

    Tarefa.appendChild(li);

    SaveTask()

    ClearInput();

}

function CriaLi() {
    const li = document.createElement('li');
    return li;
}

function CreateButon(li) {
    li.innerText += ' '
    let button = document.createElement('button');
    button.innerText = 'Deletar';
    button.style = "marginLeft:2rem";
    button.setAttribute('class', 'btn-remove');
    button.setAttribute('title', 'Apagar está tarefa');
    li.appendChild(button);

}

function DoneTask(el) {
    el.style="text-decoration: line-through;"
}
function ClearInput() {
    inputTarefa.value = null;
    inputTarefa.focus();
}

function SaveTask() {
    const liTarefas = Tarefa.querySelectorAll('li');
    const listaTarefas = [];
   
    for (const item of liTarefas) {
        let tarefaTexo = item.innerText;
        tarefaTexo = tarefaTexo.replace('Deletar', '').trim();
        listaTarefas.push(tarefaTexo);
    }
    const TarefasJson = JSON.stringify(listaTarefas);
    localStorage.setItem('tarefas', TarefasJson);
}

function AddSaveTask() {
    const tarefas = localStorage.getItem('tarefas');
    const TaskList = JSON.parse(tarefas);
    TaskList.forEach(element => {
        CriaTarefa(element);
    });
}
AddSaveTask();
