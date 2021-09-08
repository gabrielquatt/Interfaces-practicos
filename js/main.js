// "use strict";
// document.addEventListener("DOMContentLoaded", iniciarPagina);

// const url_ejer_1 = "pages/ejer_1.html";
// const url_ejer_2 = "/pages/ejer_2.html";
// const url_ejer_3 = "/pages/ejer_3.html";

// function iniciarPagina() {
//   cargar_pagina(url_ejer_1);

//   document.getElementById("pag1").addEventListener("click", (e) => {
//     cargar_pagina(url_ejer_1);
//   });
//   document.getElementById("pag2").addEventListener("click", (e) => {
//     cargar_pagina(url_ejer_2);
//   });
//   document.getElementById("pag3").addEventListener("click", (e) => {
//     cargar_pagina(url_ejer_3);
//   });
  
//   function cargar_pagina(pagina) {
//       let contenido = document.getElementById("contenido");
//       console.log(pagina);
//       fetch(pagina)
//       .then((respuesta) => {
//           if (respuesta.ok) 
//             return respuesta.text();
//           else 
//             contenido.innerHTML = "<h1>Error al cargar...</h1>";
//         })
//         .then((respuesta) => {
//             contenido.innerHTML = "";
//             contenido.innerHTML = respuesta;
//         }) .catch((error) => {
//             console.log(error);
//         });
//     }
    
// }