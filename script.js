const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//event-listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

//functions

//function addTodo
function addTodo(event) {
  event.preventDefault();
  const todoDiv = document.createElement("div");
  todoDiv.classList.add(
    "todo",
    "bg-purple-400",
    "pl-3",
    "rounded-lg",
    "flex",
    "justify-between",
    "m-2",
    "items-center"
  );
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item", "flex-1");
  todoDiv.append(newTodo);
  //local storage
  saveLocalTodos(todoInput.value);
  //complete button
  const completedButton = document.createElement("button");
  completedButton.innerHTML =
    '<i class="fas fa-check pointer-events-none"></i>';
  completedButton.classList.add(
    "complete-btn",
    "bg-green-600",
    "text-white",
    "border-none",
    "py-2",
    "px-3"
  );
  //delete button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash pointer-events-none"></i>';
  trashButton.classList.add(
    "trash-btn",
    "bg-red-600",
    "text-white",
    "border-none",
    "py-2",
    "px-3",
    "rounded-r-lg"
  );
  todoDiv.append(completedButton, trashButton);
  todoList.appendChild(todoDiv);
  todoInput.value = "";
}

//function deleteCheck
function deleteCheck(event) {
  const item = event.target;
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.remove();
  }

  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.add("line-through", "opacity-40");
  }
}

//function saveLocalTodos
function saveLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}
