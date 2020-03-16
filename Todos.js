
var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button')

var todos = 
[
    'Fazer café',
    'Estudar SQLServer',
    'Fazer atividades faculdade'
];

var todos = JSON.parse(localStorage.getItem('list_todos')) || []; //se não conseguir retornar um valor aceitavel no JSON ele irá retornar um array vazio 

function renderTodos()
{
    listElement.innerHTML = ''; //para remover todo o conteúdo do ListElement
    
    for (todo of todos)
    {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');

        var posicao = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' + posicao + ')');

        var linkText = document.createTextNode('Excluir');
        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);
    }
}
renderTodos();

function addTodo()
{
    var todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    saveToStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(posicao)
{
    todos.splice(posicao, 1); //splice: remove uma quantidade de itens do array baseado na posição (no caso 1 item)
    renderTodos();
    saveToStorage();
}

function saveToStorage()
{

    localStorage.setItem('list_todos', JSON.stringify(todos)); 
}
