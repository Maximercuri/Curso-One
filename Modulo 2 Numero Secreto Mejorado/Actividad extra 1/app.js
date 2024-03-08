let Titulo = document.querySelector('h1');
Titulo.innerHTML = 'Hora Del Desafío';

function BotonConsola(){
    console.log('El botón fue clicado')};

let Ciudad = ""
function BotonCiudad() {
    Ciudad = prompt('Dime Una ciudad de Brasil');
    alert(`Estuve en ${Ciudad} y me acordé de ti`)};

function BotonAlerta() {
    alert('Yo Amo JS')};


let Suma = 0;
let valor1 = 0;
let valor2 = 0;
function BotonSuma(){
    //parseInt() = Transformar un string en valores numéricos tipo Int (es decir enteros)//
    valor1 = parseInt(prompt("Dime 1 Número para Sumar"));
    valor2 = parseInt(prompt("Dime otro mas"));
    Suma = valor1 + valor2;
    alert(`El resultado de la suma entre ${valor1} y ${valor2} es ${Suma}`)};