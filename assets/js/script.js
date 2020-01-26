const startMenuButton = document.querySelector(".win10 [data-win10-script='toggleStartMenu']");
const startMenu = document.querySelector(".win10 [data-win10-script='startMenu']")

function startMenuButtonClickHandler(event) {
    toggleStartMenu();
}
function toggleStartMenu() {
    if(startMenuButton.classList.contains("focused")) {
        closeStartMenu();
    } else {
        openStartMenu();
    }
}
function openStartMenu() {
    startMenu.classList.add("opened");
    startMenuButton.classList.add("focused");
}
function closeStartMenu() {
    startMenu.classList.remove("opened");
    startMenuButton.classList.remove("focused");
}

startMenuButton.addEventListener("click", startMenuButtonClickHandler);