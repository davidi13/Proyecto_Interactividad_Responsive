document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener la fecha actual
    const currentDate = new Date();

    // Obtener los valores de los campos del formulario
    const checkInDate = new Date(document.getElementById('checkInDate').value);
    const checkOutDate = new Date(document.getElementById('checkOutDate').value);

    // Validar que las fechas no sean negativas ni inversas
    if (checkInDate < currentDate || checkOutDate < currentDate || checkOutDate <= checkInDate) {
        alert('Por favor, seleccione fechas válidas.');
        return; // Detener el proceso si las fechas no son válidas
    }

    // Obtener otros valores del formulario
    const numOfAdults = document.getElementById('numOfAdults').value;
    const numOfChildren = document.getElementById('numOfChildren').value;
    const roomType = document.getElementById('roomType').value;

    // Mostrar alerta con los detalles de la reserva
    const reservationDetails = `Fecha de llegada: ${checkInDate.toLocaleDateString()}\nFecha de salida: ${checkOutDate.toLocaleDateString()}\nAdultos: ${numOfAdults}\nNiños: ${numOfChildren}\nTipo de habitación: ${roomType}`;
    alert('Reserva realizada\n\n' + reservationDetails);

    // Reiniciar el formulario
    document.getElementById('reservationForm').reset();
});

// Obtener el elemento select del tipo de habitación
const roomTypeSelect = document.getElementById('roomType');
    
// Obtener el contenedor de la imagen de la habitación
const roomImage = document.getElementById('roomImage');

// Escuchar el evento de cambio en el select
roomTypeSelect.addEventListener('change', function() {
    // Obtener el valor seleccionado
    const selectedRoomType = roomTypeSelect.value;

    // Actualizar la imagen según la opción seleccionada
    switch (selectedRoomType) {
        case 'individual':
            roomImage.src = 'Multimedia/habitacion-1.png';
            break;
        case 'doble':
            roomImage.src = 'Multimedia/habitacion-2.jpg';
            break;
        case 'suite':
            roomImage.src = 'Multimedia/habitacion-3.png';
            break;
        default:
            roomImage.src = ''; // Si no se selecciona ninguna opción
            break;
    }
});
