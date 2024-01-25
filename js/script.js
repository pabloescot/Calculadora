document.addEventListener("DOMContentLoaded", function(){

  //VARIABLES
  let pant = document.querySelector(".operacion");
  let borrar = document.querySelector(".c");
  let Division = document.querySelector(".division");
  let Mult = document.querySelector(".mult");
  let Resta = document.querySelector(".resta");
  let Suma = document.querySelector(".suma");
  let Igual = document.querySelector(".igual");
  let Punto = document.querySelector(".punto");
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

  //FUNCIONES
  function actualizarPant(){
    pant.value = operacion;
  }

  function calculo(){

    let resultado = eval(operacion);
  
    pant.value = resultado;

    operacion = resultado.toString();
  }

  //BOTONES
  borrar.addEventListener("click", () =>{
    operacion = "";
    actualizarPant();
  });

  Suma.addEventListener("click", () =>{
    operacion += "+";
    actualizarPant();
  });

  Resta.addEventListener("click", () =>{
    operacion += "-";
    actualizarPant();
  });

  Mult.addEventListener("click", () =>{
    operacion += "*";
    actualizarPant();
  });
  
  Division.addEventListener("click", () =>{
    operacion += "/";
    actualizarPant();
  });

  Igual.addEventListener("click", () =>{
    calculo();
  });

  Punto.addEventListener('click', () => {
    operacion += '.';
    actualizarPant();
  });

  cero.addEventListener('click', () => {
    operacion += '0';
    actualizarPant();
  });
  
  uno.addEventListener('click', () => {
    operacion += '1';
    actualizarPant();
  });
  
  dos.addEventListener('click', () => {
    operacion += '2';
    actualizarPant();
  });
  
  tres.addEventListener('click', () => {
    operacion += '3';
    actualizarPant();
  });
  
  cuatro.addEventListener('click', () => {
    operacion += '4';
    actualizarPant();
  });
  
  cinco.addEventListener('click', () => {
    operacion += '5';
    actualizarPant();
  });
  
  seis.addEventListener('click', () => {
    operacion += '6';
    actualizarPant();
  });
  
  siete.addEventListener('click', () => {
    operacion += '7';
    actualizarPant();
  });
  
  ocho.addEventListener('click', () => {
    operacion += '8';
    actualizarPant();
  });
  
  nueve.addEventListener('click', () => {
    operacion += '9';
    actualizarPant();
  });
})