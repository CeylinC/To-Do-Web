let menuButtons;
let checkboxs;

function findListItem() {
    menuButtons = document.querySelectorAll(".todo-menu-button");
    checkboxs = document.querySelectorAll("input[type='checkbox']");
}

function addEvent() {
    menuButtons.forEach((menuButton) => menuButton.addEventListener("click", () => {
        menuButton.nextElementSibling.classList.toggle("open");
    }, true));
    checkboxs.forEach((checkbox) => checkbox.addEventListener("change", function () {
        completeTodo(checkbox.parentElement.id, checkbox.checked);
        if(selectedItem.textContent == "Done" || selectedItem.textContent == "Undone"){
            checkbox.parentElement.style.display = "none";
        }
    }));
}

window.onclick = function (event) {
    menuButtons.forEach(menuButton => {
        if (!menuButton.contains(event.target) && !menuButton.nextElementSibling.contains(event.target)) {
            menuButton.nextElementSibling.classList.remove("open");
        }
        else if (menuButton.nextElementSibling.contains(event.target)) {
            if (event.target.classList.contains("cancel-button")) {
                deleteToDo(menuButton.parentElement.id);
                menuButton.parentElement.remove();
            }
            else if (event.target.classList.contains("update-button")) {
                let todoText = menuButton.previousElementSibling.previousElementSibling.textContent;
                menuButton.previousElementSibling.previousElementSibling.innerHTML = '<input type="text"><div class="save-button">Save</div>'; //.todo-text
                menuButton.previousElementSibling.previousElementSibling.firstChild.value = todoText; //.todo-text input
                menuButton.previousElementSibling.previousElementSibling.lastChild.addEventListener("click", function () {
                    todoText = menuButton.previousElementSibling.previousElementSibling.firstChild.value; //.todo-text input
                    menuButton.previousElementSibling.previousElementSibling.innerHTML = todoText; //.todo-text
                    updateTodo(menuButton.parentElement.id, todoText);
                });
            }
        }
    })
}