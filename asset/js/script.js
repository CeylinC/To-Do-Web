const todoList = document.getElementById("todo-list");

var todos = [
    {
        id: 1,
        mission: "Ödevlerini yap",
        isComplete: false,
        date: "12 Dec 2021"
    },
    {
        id: 2,
        mission: "Ödevlerini yap",
        isComplete: false,
        date: "12 Dec 2021"
    },
    {
        id: 3,
        mission: "Ödevlerini yap",
        isComplete: true,
        date: "27/10/2023"
    },
    {
        id: 4,
        mission: "Ödevlerini yap",
        isComplete: true,
        date: "27/10/2023"
    },
    {
        id : 5,
        mission: "Ödevlerini yap",
        isComplete: false,
        date: "27/10/2023"
    }
];

function deleteToDo(id){
    todos = todos.filter(todo => todo.id != id);
}

function updateTodo(id, mission){
    todos.find(todo => todo.id == id).mission = mission;
}

function completeTodo(id, isComplete){
    todos.find(todo => todo.id == id).isComplete = isComplete;
    filterTodoList(selectedItem.textContent);
}

function createTodo(mission){
    let todo = createNewItem(mission);
    todos.push({id: parseInt(todo.id), mission: mission, isComplete: false, date: todo.children[3].textContent});
    findListItem();
}

function addTodoList() {
    todos.forEach(todo => {
        let todoItem= `
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

function filterTodoList(filterType){
    if(filterType == "flakyAll"){
        Array.from(todoList.children).forEach(todo => todo.style.display = "flex");
    }
    else if (filterType == "Done"){
        Array.from(todoList.children).forEach(todo => todo.children[0].checked ? todo.style.display = "flex" : todo.style.display = "none");
    }
    else if (filterType == "Undone"){
        Array.from(todoList.children).forEach(todo => todo.children[0].checked ? todo.style.display = "none" : todo.style.display = "flex");
    }
}

addTodoList();