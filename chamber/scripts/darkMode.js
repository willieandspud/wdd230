// Dark Mode Toggle
document.getElementById('mode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    toggleDarkModeLogo();
});

function toggleDarkModeLogo() {
    var logoLight = document.getElementById("header-logo");
    var logoDark = document.getElementById("header-logo-dark");

    if (document.body.classList.contains("dark-mode")) {
        logoLight.style.display = "none";
        logoDark.style.display = "block";
    } else {
        logoLight.style.display = "block";
        logoDark.style.display = "none";
    }
}

toggleDarkModeLogo();
