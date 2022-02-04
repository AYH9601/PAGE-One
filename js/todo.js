const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const toDos = [];

const TODOS_KEY = "toDos";

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span")
    span.innerText = newTodo;

    const button = document.createElement("button");
    button.innerText = "Delete"
    button.addEventListener("click", deleteToDo)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(e){
    e.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

function deleteToDo(e) {
    const li = e.target.parentElement;
    li.remove();
}

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach((item)=>onsole.log("this is the turn of ", item))
}