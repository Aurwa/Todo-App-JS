/*
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//event-listeners
document.addEventListener("DOMContentLoaded", () => {
  getTodosFromLocalStorage();
  fetchTodosFromAPI();
});

todoButton.addEventListener("click", () => {
  const todoText = todoInput.value;
  if (todoText.trim() !== "") {
    //addTodo(todoText);
    //saveLocalTodos(todoText);
    addTodoAndSave(todoText);
    todoInput.value = "";
  }
});

todoList.addEventListener("click", deleteCheck);

//functions

//function addTodo
function addTodo(todoText) {
  //event.preventDefault();
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
  newTodo.innerText = todoText;
  newTodo.classList.add("todo-item", "flex-1");
  todoDiv.append(newTodo);
  //local storage
  //saveLocalTodos(todoText);
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
  //todoInput.value = "";
}

//function deleteCheck
function deleteCheck(event) {
  const item = event.target;
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    removeLocalTodos(todo);
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

// function getTodos
function getTodos() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.forEach(function (todo) {
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
    newTodo.innerText = todo;
    newTodo.classList.add("todo-item", "flex-1");
    todoDiv.append(newTodo);
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
  });
}

function removeLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  //console.log(todos.indexOf("potato"));
  localStorage.setItem("todos", JSON.stringify(todos));
}

//function fetchTodosFromAPI
function fetchTodosFromAPI() {
  fetch("https://jsonplaceholder.typicode.com/todos?_limit=4")
    .then((response) => response.json())
    .then((todos) => {
      todos.forEach((todo) => {
        addTodoAndSave(todo.title);
        //saveLocalTodos(todo.title);
      });
    })
    .catch((error) => {
      console.error("Error fetching todos: ", error);
    });
}

///////////////////
function addTodoAndSave(todoText) {
  addTodo(todoText);
  saveLocalTodos(todoText);
}

//////////////////
function getTodosFromLocalStorage() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.forEach((todo) => {
    addTodo(todo);
  });
}
*/

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  getTodosFromLocalStorage();
  fetchTodosFromAPIAndStore();
});

const todoForm = document.querySelector(".todo-form");
todoForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the default form submission
  const todoText = todoInput.value;
  if (todoText.trim() !== "") {
    addTodoAndSave(todoText);
    todoInput.value = "";
  }
});
/*
todoButton.addEventListener("click", () => {
  const todoText = todoInput.value;
  if (todoText.trim() !== "") {
    addTodoAndSave(todoText);
    todoInput.value = "";
  }
});
*/

todoList.addEventListener("click", deleteCheck);

// Functions

function addTodo(todoText) {
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
  newTodo.innerText = todoText;
  newTodo.classList.add("todo-item", "flex-1");
  todoDiv.append(newTodo);

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
}

function fetchTodosFromAPIAndStore() {
  if (localStorage.getItem("todos") === null) {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=4")
      .then((response) => response.json())
      .then((todos) => {
        localStorage.setItem("todos", JSON.stringify(todos));
      })
      .catch((error) => {
        console.error("Error fetching todos: ", error);
      });
  }
}

function getTodosFromLocalStorage() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.forEach((todo) => {
    addTodo(todo.title);
  });
}

function deleteCheck(event) {
  const item = event.target;
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    removeLocalTodos(todo);
    todo.remove();
  }

  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.add("line-through", "opacity-40");
  }
}

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

function removeLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function addTodoAndSave(todoText) {
  console.log("Adding todo:", todoText); // Debugging line
  addTodo(todoText);
  saveLocalTodos(todoText);
}
