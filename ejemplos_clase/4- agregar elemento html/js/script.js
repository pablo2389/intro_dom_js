"use strict";
/* Escribir el código aquí */

// ----------------------------------------------------
//Apuntamos al header de nuestro post mas visitado
const postHeader = document.getElementsByClassName("post-header")[2];

// Generamos un nuevo hijo para nuestro post mas visitado
const masVisitado = document.createElement("span");

// Le damos texto a nuestro "Child Node"
masVisitado.innerText = "Mas Visitado";

// Agregamos nuestro hijo al header de nuestro post
postHeader.appendChild(masVisitado);
// ----------------------------------------------------