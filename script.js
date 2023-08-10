const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//event-listeners
todoButton.addEventListener("click", addTodo);

//functions
function addTodo(event) {
  event.preventDefault();
  const todoDiv = document.createElement("div");
  //todoDiv.classList.add('mx-auto', 'p-4', 'rounded-md', 'shadow-2xl');

  todoDiv.classList.add(
    "todo",
    "bg-purple-200",
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
  //complete button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
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
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add(
    "trash-btn",
    "bg-red-600",
    "text-white",
    "border-none",
    "py-2",
    "px-3",
    "rounded-r-lg"
  );
  todoDiv.append(newTodo, completedButton, trashButton);
  todoList.appendChild(todoDiv);
  todoInput.value = "";
}
