"use strict";

let canvas =
  /** @type { HTMLcanvasElement} */ document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let width = 400;
let height = 200;
let imageData = ctx.createImageData(width, height);

let r = 0;
let g = 0;
let b = 0;
let a = 255;

drawReact(imageData, r, g, b, a);
ctx.putImageData(imageData, 0, 0);

function drawReact(imageData, r, g, b, a) {
  let coeficiente = 255 / (width / 2);
  for (let x = 0; x < width; x++) {
  
    if (x < width / 2) {
      r = r+coeficiente;
      g = g+coeficiente;
      b = 0; //r= 255, g=255, b = 0 = amarrillo
    } else {
      r = r+coeficiente;
      g = g-coeficiente;
      b = 0;
      //r= 255, g=0, b = 0 = rojo
    }

    for (let y = 0; y < height; y++) {
      setPixel(imageData, x, y, r, g, b, a);
    }
  }
}

function setPixel(imageData, x, y, r, g, b, a) {
  let index = (x + y * imageData.width) * 4;
  imageData.data[index + 0] = r;
  imageData.data[index + 1] = g;
  imageData.data[index + 2] = b;
  imageData.data[index + 3] = a;
}
