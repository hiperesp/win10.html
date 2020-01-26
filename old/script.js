(() => {
    const startMenu = document.querySelector("#startmenu");
    const startMenuButton = document.querySelector("#startmenu-toggle-button");

    startMenuButton.addEventListener("click", startMenuButtonClickHandler);

    function startMenuButtonClickHandler(event) {
        if(startMenuButton.classList.contains("focus")) {
            startMenu.classList.remove("visible");
            startMenuButton.classList.remove("focus");
        } else {
            startMenu.classList.add("visible");
            startMenuButton.classList.add("focus");
        }
    }
})();