const sidebar = document.getElementById("sidebar");
const hamburgerMenu = document.getElementById("sidebar-hamburger");

selectDisplayType();

hamburgerMenu.onclick = function () {
    sidebar.classList.toggle("open");
    hamburgerMenu.innerHTML = sidebar.classList.contains("open") ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
    
}

function selectDisplayType() {
    let items = document.querySelectorAll(".sidebar-item");
    let selectedItem = items[1]; // Select "All" type
    items.forEach(item => {
        if(item.id == ""){
            item.addEventListener("click", function () {
                selectedItem.classList.remove("selected");
                item.classList.add("selected");
                selectedItem = item;
            });
        }
    });
}