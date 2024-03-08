document.addEventListener('DOMContentLoaded', function() {
    const cookieNotification = document.getElementById('cookie-notification');
    const acceptCookiesBtn = document.getElementById('accept-cookies');
    const rejectCookiesBtn = document.getElementById('reject-cookies');

    // Comprobar si el usuario ya ha tomado una decisión sobre las cookies
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');

    if (!cookiesAccepted) {
        cookieNotification.style.display = 'block'; // Mostrar la notificación si no hay decisión previa
    }

    // Evento de clic en el botón de aceptar cookies
    acceptCookiesBtn.addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', true); // Almacenar la decisión del usuario
        cookieNotification.style.display = 'none'; // Ocultar la notificación
    });

    // Evento de clic en el botón de rechazar cookies
    rejectCookiesBtn.addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', false); // Almacenar la decisión del usuario
        cookieNotification.style.display = 'none'; // Ocultar la notificación
    });
});