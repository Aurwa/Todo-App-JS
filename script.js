const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const todoContainer = document.querySelector(".todo-container");

//event-listeners
todoButton.addEventListener("click", addTodo);

//functions
function addTodo(event) {
  event.preventDefault();
  const todoDiv = document.createElement("div");
  //todoDiv.classList.add('mx-auto', 'p-4', 'rounded-md', 'shadow-2xl');
  todoDiv.classList.add("todo");
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
}
