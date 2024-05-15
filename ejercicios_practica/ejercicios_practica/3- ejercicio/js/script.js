"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* Enunciado:

1)
Obtener cada uno de los botones
y asignarle el evento de mouse "click"

Cuando un botón es presionado, se debe agregar la clase
"fuego" al botón (deberá cambiar de color)

*/
"use strict";


const botones = document.querySelectorAll('.btn');


function agregarClaseFuego(event) {
    
    event.target.classList.add('fuego');
}

botones.forEach(boton => {
    boton.addEventListener('click', agregarClaseFuego);
});
