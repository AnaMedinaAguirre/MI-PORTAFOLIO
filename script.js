document.addEventListener("DOMContentLoaded", () => {
    const toggleButtons = document.querySelectorAll("[data-toggle-btn]");
    const skillsBox = document.querySelector(".skills-box");
    const defaultIndex = 0; // Índice del botón de "Lenguajes" (cambia si es otro)

    // Configuración inicial
    toggleButtons.forEach((btn, index) => {
        if (index === defaultIndex) {
            btn.classList.add("active");
            skillsBox.querySelectorAll("ul")[index].style.display = "flex";
        } else {
            skillsBox.querySelectorAll("ul")[index].style.display = "none";
        }
    });

    // Manejar clics en botones
    toggleButtons.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            // Remover la clase 'active' de todos los botones
            toggleButtons.forEach((b) => b.classList.remove("active"));

            // Ocultar todas las listas
            skillsBox.querySelectorAll("ul").forEach((list) => {
                list.style.display = "none";
            });

            // Añadir la clase 'active' al botón seleccionado
            btn.classList.add("active");

            // Mostrar la lista correspondiente al botón seleccionado
            skillsBox.querySelectorAll("ul")[index].style.display = "flex";
        });
    });
});


let menuVisible = false;
//función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opción
    document.getElementById("nav").classList = "";
    menuVisible = false;
}