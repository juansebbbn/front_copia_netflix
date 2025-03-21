const profileContainer = document.getElementById("contenedor-perfil");
const menu = document.getElementById("menu");
const arrow = document.getElementById("flecha");

profileContainer.addEventListener("click", () => {
    menu.classList.toggle("active");
    arrow.style.transform = menu.classList.contains("active") ? "rotate(180deg)" : "rotate(0deg)";
});

document.addEventListener("click", (event) => {
    if (!profileContainer.contains(event.target)) {
        menu.classList.remove("active");
        arrow.style.transform = "rotate(0deg)";
    }
});