"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

//* Enunciado
//*

//1)Leer el título del "header" del post e imprimirlo en consola.
const tituloPost = document.querySelector('.post-header h2').textContent;
console.log(tituloPost);

//*2)Cambiar título utilizando javascript por otro cualquiera.

document.querySelector('.post-header h2').textContent = '¡Título cambiado!';