document.getElementById("themeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
    
    let button = document.getElementById("themeToggle");
    if (document.body.classList.contains("dark-mode")) {
        button.textContent = "Zmień na jasny motyw";
    } else {
        button.textContent = "Zmień na ciemny motyw";
    }
});