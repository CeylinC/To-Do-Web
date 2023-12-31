let saveButton = document.querySelector(".save-button");
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function createNewItem(mission) {
    let today = new Date();
    let todo = document.createElement("div");
    todo.className = "todo-item";
    todo.id = localStorage.length == 0 ? 1 : findLastKey() + 1;

    todo.innerHTML = `
    <input type="checkbox">
    <i class="fa-solid fa-star checkbox-icon"></i>
    <div class="todo-text">${mission}</div>
    <div class="todo-date">${today.getDate() + " " + months[today.getMonth()] + " " + today.getFullYear()}</div>
    <div class="todo-menu-button"><i class="fa-solid fa-ellipsis-vertical"></i></div>
    <ul class="todo-menu">
        <li class="todo-menu-item cancel-button"><i class="fa-solid fa-trash-can"></i>Delete</li>
        <li class="todo-menu-item update-button"><i class="fa-solid fa-pen"></i>Edit</li>
    </ul>
    `;
    todo.children[4].addEventListener("click", () => todo.children[5].classList.toggle("open"), true);
    todo.children[0].addEventListener("change", () => {
        completeTodo(todo.id, todo.children[0].checked); if (selectedItem.textContent == "Done" || selectedItem.textContent == "Undone") {
            todo.style.display = "none";
        }
    });
    todoList.insertAdjacentElement("afterbegin", todo);
    return todo;
}

saveButton.onclick = function () {
    if (saveButton.previousElementSibling.value != "") {
        createTodo(saveButton.previousElementSibling.value);
        saveButton.previousElementSibling.value = "";
    }
}

function findLastKey() {
    let max = 0;
    for (let i = 0; i < localStorage.length; i++) {
        if (parseInt(localStorage.key(i)) > max) {
            max = parseInt(localStorage.key(i));
        }
    }
    return max;
}