 // Evento para mostrar la lista de items al hacer clic en la imagen
 document.getElementById('image').addEventListener('click', function() {
    var infoList = document.getElementById('info-list');
    
    // Hacer visible la lista dentro de la imagen
    infoList.style.display = (infoList.style.display === 'block') ? 'none' : 'block';
});

// Evento para mostrar el texto informativo al hacer clic en un item
var items = document.querySelectorAll('.info-item');
items.forEach(function(item) {
    item.addEventListener('click', function() {
        var text = this.getAttribute('data-info');
        
        // Mostrar el texto informativo
        var infoContainer = document.getElementById('info-container');
        var infoText = document.getElementById('info-text');
        infoText.innerHTML = text;
        infoContainer.style.display = 'block';
    });
});

// Evento para cerrar el contenedor de texto informativo
document.getElementById('close-btn').addEventListener('click', function() {
    var infoContainer = document.getElementById('info-container');
    infoContainer.style.display = 'none';
});