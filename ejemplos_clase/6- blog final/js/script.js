"use strict";

// Apuntamos a nuestro titulo y lo guardamos en una constante
const tituloPrincipal = document.querySelector(".main-title");

// Accedemos al texto de nuestro titulo
console.log(tituloPrincipal.textContent);

// Generamos la fecha que queremos insertar
const hoy = new Date();

// Alteramos el texto de nuestro titulo con un "template string"
tituloPrincipal.textContent = `Publica tu aprendizaje: ${hoy.getDate()}/${
  hoy.getMonth() + 1
}/${hoy.getFullYear()}`;

// ----------------------------------------------------
// Apuntamos a nuestro post y lo guardamos en una constante
const primerPost = document.querySelector(".post");

// Vemos las clases de nuestro primer post
console.log(primerPost.classList);

// Agregamos un listener a nuestro primer post
primerPost.addEventListener("click", function () {
  console.log("Primer post");
});

// ----------------------------------------------------
// Apuntamos a nuestro tercer post y lo guardamos en una constante
const tercerPost = document.getElementsByClassName("post")[2];

// Vemos los "Child Nodes" de nuestro tercer post
console.log(tercerPost.childNodes);

// ----------------------------------------------------
//Apuntamos al header de nuestro post mas visitado
const postHeader = document.getElementsByClassName("post-header")[2];

// Generamos un nuevo hijo para nuestro post mas visitado
const masVisitado = document.createElement("span");

//Le damos texto a nuestro "Child Node"
masVisitado.innerText = "Mas Visitado";

// Agregamos nuestro hijo al header de nuestro post
postHeader.appendChild(masVisitado);

// ----------------------------------------------------
// Apuntamos al segundo post
const segundoPost = document.getElementsByClassName("post")[1];

// Agregamos un listener
segundoPost.addEventListener("mouseover", function () {
  // Removemos la clase de cerrado
  segundoPost.classList.remove("closed");
  // Agregamos la clase de abierto
  segundoPost.classList.add("open");
});

segundoPost.addEventListener("mouseout", function () {
  // Agregamos la clase de cerrado
  segundoPost.classList.add("closed");
  // Quitamos la clase de abierto
  segundoPost.classList.remove("open");
});
