document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.getElementById("menu");
    const nav = document.querySelector("nav");
    const modeButton = document.getElementById("mode");
    const body = document.body;

    menuButton.addEventListener("click", function() {
        menuButton.classList.toggle("open");
        nav.classList.toggle("open");
    });

    modeButton.addEventListener("click", function() {
        body.classList.toggle("dark-mode");
        if (modeButton.textContent.includes("🕶️")) {
            modeButton.textContent = "🔆";
        } else {
            modeButton.textContent = "🕶️";
        }
    });
});
