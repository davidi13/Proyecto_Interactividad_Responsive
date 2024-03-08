// Desplazamiento suave al hacer clic en los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Función para cambiar al modo oscuro
function enableDarkMode() {
    document.body.classList.add('dark-mode');
    // Cambiar los elementos marrones a grises
    const brownElements = document.querySelectorAll('.brown-element');
    brownElements.forEach(element => {
        element.style.color = '#cccccc'; // Cambiar el color de texto marrón a gris
    });
}

// Función para cambiar al modo claro
function disableDarkMode() {
    document.body.classList.remove('dark-mode');
    // Cambiar los elementos grises a marrones
    const brownElements = document.querySelectorAll('.brown-element');
    brownElements.forEach(element => {
        element.style.color = '#654321'; // Cambiar el color de texto gris a marrón
    });
}

// Función para alternar entre el modo claro y oscuro
function toggleDarkMode() {
    if (document.body.classList.contains('dark-mode')) {
        disableDarkMode();
        localStorage.setItem('darkMode', 'disabled'); // Guardar el estado en localStorage
    } else {
        enableDarkMode();
        localStorage.setItem('darkMode', 'enabled'); // Guardar el estado en localStorage
    }
}

// Comprobar el estado del modo oscuro al cargar la página
window.onload = function() {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
        enableDarkMode();
    }
}
// Hacer el mapa en blanco y negro

function toggleDarkMode() {
    var darkModeButton = document.getElementById("dark-mode-toggle");
    var map = document.querySelector("#mapa iframe");

    if (darkModeButton.innerText === "Modo Oscuro") {
        darkModeButton.innerText = "Modo Claro";
        document.body.classList.add("dark-mode");
        map.style.filter = "grayscale(100%)";
    } else {
        darkModeButton.innerText = "Modo Oscuro";
        document.body.classList.remove("dark-mode");
        map.style.filter = "grayscale(0)";
    }
}
// Evento de clic para el botón de alternar modo
document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);

// Carrusel habitaciones

$(document).ready(function(){
    $('.carousel').carousel({
        interval: false // Desactiva el cambio automático de diapositivas
    });
});





