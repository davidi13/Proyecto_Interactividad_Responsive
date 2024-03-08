// Mostrar notifiación cada diez segundos

document.addEventListener("DOMContentLoaded", function() {
    setInterval(showNotification, 10000); // Llamar a la función showNotification cada 10 segundos
});

// Enseñar notificación

function showNotification() {
    var notification = document.getElementById("notification");
    notification.classList.add("active");
}

// Cerrar notificaación
function closeNotification() {
    var notification = document.getElementById("notification");
    notification.classList.remove("active");
}