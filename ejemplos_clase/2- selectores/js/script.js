"use strict";
/* Escribir el código aquí */

/* Selectores */
// ----------------------------------------------------
/* Selector por clase */
// Apuntamos a nuestro titulo y lo guardamos en una constante
const tituloPrincipalPorClase = document.querySelector(".main-title");

// Accedemos al texto de nuestro titulo
console.log(tituloPrincipalPorClase.textContent);

/* Selector por ID */
// Apuntamos a nuestro titulo y lo guardamos en una constante
const tituloPrincipalPorID = document.querySelector("#title1");

// Accedemos al texto de nuestro titulo
console.log(tituloPrincipalPorID.textContent);

// ----------------------------------------------------
// Apuntamos a nuestro post y lo guardamos en una constante
const primerPost = document.querySelector(".post");

// Vemos las propiedas con las que cuenta
console.log(primerPost)

/* Child */
// ----------------------------------------------------
// Apuntamos a nuestro tercer post y lo guardamos en una constante
const tercerPost = document.getElementsByClassName("post")[2];

// Vemos los "Child Nodes" de nuestro tercer post
console.log(tercerPost.childNodes);