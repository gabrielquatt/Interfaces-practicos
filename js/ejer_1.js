const array = new Array();
let fila =10;
let colum =10;
//--------------------------------------------------------------------------------//
// a) Escribir una función que retorne el valor máximo de toda la matriz

let btn_matiz = document
  .getElementById("matrix")
  .addEventListener("click", () => {
    cargarMatriz();
  });
//--------------------------------------------------------------------------------//
// b) Escribir una función que retorne el valor máximo contenido en las filas pares y el valor
// mínimo en las filas impares
let listValues = document
  .getElementById("ListParImp")
  .addEventListener("click", () => {
    if(array.length > 0){
      ejerB(array);
    }
  });
//--------------------------------------------------------------------------------//
//Calcular el valor promedio de cada fila y guardarlos en un arreglo.
let btn__max = document
  .getElementById("promedioFilas")
  .addEventListener("click", () => {
    if(array.length > 0){
      promediosFilas();
    }
  });

  //--------------------------------------------------------------------------------//
  function cargarMatriz() {
    for (let x = 0; x < fila; x++) {
      array[x] = new Array();
      for (let y = 0; y < colum; y++) {
        array[x][y] = randomNum();
      }
    }
    console.table(array);
  }
  
  function randomNum() {
    return Math.floor(Math.random() * (100 - 1) + 1);
  }
//--------------------------------------------------------------------------------//

function ejerB(array) {
  let par = [];
  let imp = [];
 for (let x = 0; x < fila; x++) { 
   if((x % 2) == 0){
     par[x] = numMax(x);
    }else{
     imp[x] = numMin(x);
   }    
  }
  console.table(par);
  console.table(imp);
}
function numMax(x) {
  let max = 0;
  for (let y = 0; y < colum; y++) {
    if (array[x][y] > max) {
      max = array[x][y];
    }
  }
  return max;
}
function numMin(x) {
  let min = 100;
  for (let y = 0; y < colum; y++) {
    if (array[x][y] < min) {
      min = array[x][y];
  }}
  return min;
}
//----------------------------------------------------//

function promediosFilas(){
  let promedios = [];
  for (let x = 0; x < fila; x++) {
    let suma = 0;
    for (let y = 0; y < colum; y++) {
      suma = suma + array[x][y];
    }
    promedios[x]=suma/colum;
  }
  console.table(promedios);
}

//--------------------------------------------------------------------------------//
