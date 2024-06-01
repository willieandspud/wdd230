function toggleDarkModeLogo() {
    var logoLight = document.getElementById("header-logo");
    var logoDark = document.getElementById("header-logo-dark");


    var isDarkMode = document.body.classList.contains("dark-mode");

    if (isDarkMode) {
        logoLight.style.display = "none";
        logoDark.style.display = "block";
    } else {
        logoLight.style.display = "block";
        logoDark.style.display = "none";
    }
}

toggleDarkModeLogo();
