"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* Enunciado:

1)
Obtener cada uno de los botones utilizando su ID,
luego cambiar el texto de los botones por:
PEGAR / COPIAR / CORTAR

2)
Obtener cada uno de los botones,
luego a cada uno agregar la clase "agua"

*/
const boton1 = document.getElementById('boton1');
console.log(boton1);
boton1.textContent="PEGAR"

const boton2 = document.getElementById('boton2');
console.log(boton2);
boton2.textContent="COPIAR"

const boton3 = document.getElementById('boton3');
console.log(boton3);
boton3.textContent="CORTAR"