"use strict";
document.addEventListener("DOMContentLoaded", iniciar);

const height = canvas.height;
const width= canvas.width;

function iniciar(){
  
   document.getElementById("btn_loadImg").addEventListener('click',()=>{
    let aux = document.getElementById("img").value;
    var url = aux.split( '/' );
    img.onload = mostrarMensaje;
    //TODO solucionar error de "fakepath" que no permite encontrar img 
    img.src =url[url.length-1];
  });


  let canvas =
  /** @type { HTMLcanvasElement} */ document.getElementById("canvas");
  let ctx = canvas.getContext("2d");
  var img = new Image();

}

function mostrarMensaje(){
  console.log(img.width);
  console.log(img.height);
  ctx.drawImage(img, 0, 0,width,height);
 
}


