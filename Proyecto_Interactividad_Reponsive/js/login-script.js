document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    // Obtener los valores de los campos de entrada
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Verificar si ambos campos están vacíos
    if (email.trim() === '' || password.trim() === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Verificar el formato del correo electrónico utilizando una expresión regular
    var emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailFormat.test(email)) {
        alert('Por favor, introduce un correo electrónico válido.');
        return;
    }

    // Verificar el formato de la contraseña (al menos 6 caracteres)
    if (password.length < 6) {
        alert('La contraseña debe tener al menos 6 caracteres.');
        return;
    }

    // Si todo está bien, se puede enviar el formulario
    alert('Inicio de sesión exitoso.');
});
