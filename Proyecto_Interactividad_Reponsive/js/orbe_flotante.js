// Orbe flotante
function toggleWidget() {
    var content = document.getElementById("widget-content");
    content.style.display = (content.style.display === "block") ? "none" : "block";
  }

// Capturar el formulario del widget
var widgetForm = document.getElementById("widget-form");

// Agregar un evento de escucha para el envío del formulario
widgetForm.addEventListener("submit", function(event) {
    // Prevenir el comportamiento predeterminado de recargar la página
    event.preventDefault();

    // Mostrar un mensaje de agradecimiento
    var widgetTextarea = document.getElementById("widget-textarea");
    widgetTextarea.value = "Gracias por tu opinión";
});