const todoList = [];
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#new-todo');
const todoUl = document.querySelector('#todo-list');

todoForm.addEventListener('submit', function(event) {
	event.preventDefault();
	addTodo();
	todoInput.value = '';
});

function addTodo() {
	const todoText = todoInput.value.trim();

	if(todoText !== '') {
		todoList.push(todoText);
		displayTodoList();
	}
}

function displayTodoList() {
	todoUl.innerHTML = '';
	const todoHtml = todoList.map(function(todo) {
		return '<li>' + todo + '</li>';
	}).join('');
	todoUl.innerHTML = todoHtml;
}
