document.addEventListener("DOMContentLoaded", function(){
// Obtenemos los elementos HTML que vamos a utilizar
let pant = document.querySelector(".operacion");
let borrar = document.querySelector(".c");
let division = document.querySelector(".division");
let mult = document.querySelector(".mult");
let resta = document.querySelector(".resta");
let suma = document.querySelector(".suma");
let igual = document.querySelector(".igual");
let punto = document.querySelector(".punto");
let cero = document.querySelector(".cero");
let uno = document.querySelector(".uno");
let dos = document.querySelector(".dos");
let tres = document.querySelector(".tres");
let cuatro = document.querySelector(".cuatro");
let cinco = document.querySelector(".cinco");
let seis = document.querySelector(".seis");
let siete = document.querySelector(".siete");
let ocho = document.querySelector(".ocho");
let nueve = document.querySelector(".nueve");

let operacion = "";

// Función para actualizar el pant con la operación actual
function actualizarPant() {
  pant.value = operacion;
}

// Función para realizar una operación
function calcular() {
  // Evaluamos la operación utilizando la función eval de JavaScript
  let resultado = eval(operacion);

  // Actualizamos el pant con el resultado de la operación
  pant.value = resultado;

  // Actualizamos la variable de operación para poder seguir haciendo cálculos
  operacion = resultado.toString();
}

// Añadimos un listener a cada botón
borrar.addEventListener("click", () => {
  operacion = "";
  actualizarPant();
});

division.addEventListener("click", () => {
  operacion += "/";
  actualizarPant();
});

mult.addEventListener("click", () => {
  operacion += "*";
  actualizarPant();
});

resta.addEventListener("click", () => {
  operacion += "-";
  actualizarPant();
});

suma.addEventListener("click", () => {
  operacion += "+";
  actualizarPant();
});

igual.addEventListener("click", () => {
  calcular();
});

punto.addEventListener("click", () => {
  operacion += ".";
  actualizarPant();
});

cero.addEventListener("click", () => {
  operacion += "0";
  actualizarPant();
});

uno.addEventListener("click", () => {
  operacion += "1";
  actualizarPant();
});

dos.addEventListener("click", () => {
  operacion += "2";
  actualizarPant();
});

tres.addEventListener("click", () => {
  operacion += "3";
  actualizarPant();
});

cuatro.addEventListener("click", () => {
  operacion += "4";
  actualizarPant();
});

cinco.addEventListener("click", () => {
  operacion += "5";
  actualizarPant();
});

seis.addEventListener("click", () => {
  operacion += "6";
  actualizarPant();
});

siete.addEventListener("click", () => {
  operacion += "7";
  actualizarPant();
});

ocho.addEventListener("click", () => {
  operacion += "8";
  actualizarPant();
});

nueve.addEventListener("click", () => {
  operacion += "9";
  actualizarPant();
});

  })
  