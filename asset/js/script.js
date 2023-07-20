/**
 * () Menu konumunu düzelt
 */
const todoList = document.getElementById("todo-list");

function deleteToDo(id) {
    localStorage.removeItem(id);
}

function updateTodo(id, mission) {
    let todoObject = JSON.parse(localStorage.getItem(id));
    todoObject.mission = mission;
    localStorage.setItem(id, JSON.stringify(todoObject));
}

function completeTodo(id, isComplete) {
    let todoObject = JSON.parse(localStorage.getItem(id));
    todoObject.isComplete = isComplete;
    localStorage.setItem(id, JSON.stringify(todoObject));
}

function createTodo(mission) {
    let todo = createNewItem(mission);
    localStorage.setItem(parseInt(todo.id), JSON.stringify({ id: parseInt(todo.id), mission: mission, isComplete: false, date: todo.children[3].textContent }));
    findListItem();
}

function addTodoList() {
    let todoArray = [];
    for (let i = 0; i < localStorage.length; i++) {
        let todo = JSON.parse(localStorage.getItem(localStorage.key(i)));
        todoArray.push(todo);
    }
    todoArray.sort((a, b) => { return a.id - b.id; });
    todoArray.forEach((todo) => {
        let todoItem = `
        <li class="todo-item" id="${todo.id}">
            <input type="checkbox" ${todo.isComplete ? "checked" : ""}>
            <i class="fa-solid fa-star checkbox-icon"></i>
            <div class="todo-text">${todo.mission}</div>
            <div class="todo-date">${todo.date}</div>
            <div class="todo-menu-button"><i class="fa-solid fa-ellipsis-vertical"></i></div>
            <ul class="todo-menu">
                <li class="todo-menu-item cancel-button"><i class="fa-solid fa-trash-can"></i>Delete</li>
                <li class="todo-menu-item update-button"><i class="fa-solid fa-pen"></i>Edit</li>
            </ul>
        </li>
        `;
        todoList.insertAdjacentHTML("afterbegin", todoItem);
    });
    findListItem();
    addEvent();
}

function filterTodoList(filterType) {
    if (filterType == "flakyAll") {
        Array.from(todoList.children).forEach(todo => todo.style.display = "flex");
    }
    else if (filterType == "Done") {
        Array.from(todoList.children).forEach(todo => todo.children[0].checked ? todo.style.display = "flex" : todo.style.display = "none");
    }
    else if (filterType == "Undone") {
        Array.from(todoList.children).forEach(todo => todo.children[0].checked ? todo.style.display = "none" : todo.style.display = "flex");
    }
}

addTodoList();