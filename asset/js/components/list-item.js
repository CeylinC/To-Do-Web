let menuButtons;


function findListItem() {
    menuButtons = document.querySelectorAll(".todo-menu-button");
    addEvent();
}

function addEvent() {
    menuButtons.forEach((menuButton) => menuButton.addEventListener("click", () => {
        menuButton.nextElementSibling.classList.toggle("open");
    }, true));
}

window.onclick = function (event) {
    menuButtons.forEach(menuButton => {
        if (!menuButton.contains(event.target) && !menuButton.nextElementSibling.contains(event.target)) {
            menuButton.nextElementSibling.classList.remove("open");
        }
        else if (menuButton.nextElementSibling.contains(event.target)) {
            if (event.target.classList.contains("cancel-button")) {
                menuButton.parentElement.remove();
            }
            else if (event.target.classList.contains("update-button")) {
                let todoText = menuButton.previousElementSibling.previousElementSibling.textContent;
                menuButton.previousElementSibling.previousElementSibling.innerHTML = '<input type="text"><div class="save-button">Save</div>';
                menuButton.previousElementSibling.previousElementSibling.firstChild.value = todoText;
                menuButton.previousElementSibling.previousElementSibling.lastChild.addEventListener("click", function(){
                    todoText = menuButton.previousElementSibling.previousElementSibling.firstChild.value;
                    menuButton.previousElementSibling.previousElementSibling.innerHTML = todoText;
                });
            }
        }
    })
}

findListItem();