//También se puede usar para un mensaje "" o `` sin problemas en JAVASCRIPT//
// alert = Mostrar un Mensaje al Usuario//
alert("Hello World"); 
//El punto y coma (;) no es necesario pero es recomendable acostumbrarse a usarlo//
//Recomendación: Siempre declarar variables inicialmente//
//let = declaración de variable//
let IntentoMáximo = parseInt (prompt("Elije con cuantas vidas quieres jugar"))
let CotaSuperior = parseInt (prompt("Elije hasta que numero quieras jugar (el ultimo no estará incluido)"))
let NumeroSecreto = Math.floor(Math.random()*CotaSuperior);
let NumeroUsuario = 0;
let Contador = 0

while (NumeroSecreto != NumeroUsuario) {
    // Formas de escribir un contador: Normal (nombre = nombre + 1), C++ (nombre +=), java (nombre++)
    Contador = Contador + 1
    //prompt = Interfaz de interacción de la pagina y el usuario//
    NumeroUsuario = parseInt(prompt(`Inserta un número entre 0 y ${CotaSuperior} a continuación:`));
    //console.log = muestra en la Consola de desarrollador el valor consultado, no en pantalla sino en la consola//
    console.log(NumeroUsuario);
    // = significa asignar un valor, == significa comparar valores si son elementos iguales//
    if (NumeroUsuario == NumeroSecreto) {
        // NOTA IMPORTANTE: si el string se pone con los símbolos `` (ALT Gr + botón "}") tomara todo lo de adentro como texto literal con la diferencia de que lo que se escriba dentro de "${}" sera tratado como variable o código común//
        alert (`!Bravo¡ Acertaste el numero secreto que es ${NumeroSecreto}. ¡Felicidades, has ganado!`);
        alert (`Lograste descifrar el numero secreto en ${Contador} ${Contador == 1 ? `intento` : `intentos`}`)
        break} 
        // else = sino //
    else {
            alert(`Lo siento, no acertaste el numero secreto pero te puedo decir que es ${NumeroSecreto < NumeroUsuario ? "menor" : "mayor"}`)
    if (IntentoMáximo - Contador <= 0 ) {
        alert ("Llegaste al máximo de intentos. ¡Mejor suerte la proxima!");
        alert (`El numero secreto era ${NumeroSecreto}`)
        break; }
    alert (`ALERTA: ${IntentoMáximo - Contador == 1 ? "Queda" : "Quedan"} ${IntentoMáximo - Contador} ${IntentoMáximo - Contador == 1? "intento" : "intentos"}`); }}

/*
            Desafíos opcionales Clase 1
alert("¡Bienvenida y bienvenido a nuestro sitio web!")
let Luna = "luna"
let Edad = 25
let numeroDeVentas = 50
let saldoDisponible = 1000
console.log (Luna, Edad, numeroDeVentas, saldoDisponible)
alert ("¡Error! Completa todos los campos")
let mensajeDeError = "¡Error! Completa todos los campos"
alert (mensajeDeError)
let nombre = prompt("¿Cual es tu nombre de usuario?")
Edad = prompt ("Ingrese su edad")
if (Edad >= 18) {alert("¡Puedes obtener tu licencia de conducir!")}
*/

/*
            Desafíos opcionales Clase 2
let DiaSemana = prompt ("Indícame un dia de la semana");
//toLowerCase = convierte la cadena de texto previa a ella en minúsculas. SOLO funciona con variables//
if (DiaSemana.toLowerCase() == "sábado") {alert ("¡Buena semana!")}
else {if (DiaSemana.toLowerCase() == "domingo") {alert("¡Buena semana!")}};

let numero = prompt ("Indícame un numero positivo o negativo ");
if (numero < 0) {alert ("Es negativo")}
else {
    if (numero > 0) {alert ("Es positivo")} 
    else {alert("Es 0 o texto")}};

let puntuación = prompt ("indica tu puntuación conseguida a continuación");
if (puntuación >= 100) {alert("¡Felicidades, has ganado!")}
else {alert("Intenta nuevamente para ganar.")};

let sueldo = prompt ("indícame el restante de tu sueldo actualmente");
alert (`Se te informa que el sueldo restante que posees es de $${sueldo}`);

let nombreUsuario = prompt ("Indícame tu Nombre");
alert(`¡Bienvenido a este programa, ${nombreUsuario}!`)
*/

/*
            Desafíos opcionales Clase 3
let ContadorNúmeros = 1;
while (ContadorNúmeros <= 10) {
    alert(`Iteración numero ${ContadorNúmeros}`);
    ContadorNúmeros = ContadorNúmeros + 1;
}
let ContadorDescendente = 10;
while (ContadorDescendente >= 0) {
    alert (`Iteración numero ${ContadorDescendente}`);
    ContadorDescendente = ContadorDescendente - 1;
}
NumeroUsuario = prompt ("ingresa un numero para contar hasta el");
let ContadorUsuario = 0;
if (NumeroUsuario < 0) {
while (NumeroUsuario <= ContadorUsuario) {
    console.log(ContadorUsuario);
    ContadorUsuario = ContadorUsuario - 1;
}
} else {
    while (ContadorUsuario <= NumeroUsuario) {
        console.log(ContadorUsuario);
        ContadorUsuario = ContadorUsuario + 1;
    }
} 
*/

//&& = condicional "...y..." comprueba si ambas sentencias son verdaderas y si se cumplen retorna un VERDADERO//
//|| = condicional "...o..." comprueba si una de las sentencias es verdadera y si al menos una se cumple retorna un VERDADERO//
//!= = distinto //
// ! = negación de una sentencia//

/*
            Desafios opcionales Clase 4
console.log("¡Bienvenido!");
let Minombre = "Maxi";
console.log(`Hola, ${Minombre}`);
alert(`Hola, ${Minombre}`);
let LenguajeFavorito = prompt("¿Cual es tu lenguaje favorito de programación?");
console.log(LenguajeFavorito);
let Valor1 = 4;
let Valor2 = 8;
let Resultado = Valor2 + Valor1;
console.log(`El resultado de la suma de ${Valor2} y ${Valor1} es igual a ${Resultado}`);
let Valor3 = 9;
let Valor4 = 6;
let ResultadoResta = Valor3 - Valor4;
console.log(`El resultado de la resta de ${Valor3} y ${Valor4} es igual a ${ResultadoResta}`);
let Edad = parseInt(prompt("ingresa tu edad"));
if( Edad < 18 ) {
    console.log("eres menor de edad")}
else {
    console.log("eres mayor de edad")};
let Numero = parseInt (prompt("Dame un numero"));
if (Numero < 0) {
    console.log("es negativo")}
else { 
    if (Numero > 0) {
        console.log("es positivo")} 
    else{
        console.log("es cero") }};
Contador = 1;
while (Contador <= 10) {
    console.log(Contador)
    Contador++};
let Nota = 9;
if (Nota >= 7) {
    console.log("aprobado")} 
else{
    console.log("reprobado") };
Numero = Math.random();
console.log(Numero);
Numero = Math.random()*10 + 1;
console.log(Numero);
Numero  = Math.random()*1000 + 1;
console.log(Numero); 
*/