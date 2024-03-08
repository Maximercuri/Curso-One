function MostrarHola(){
    console.log('¡Hola, Mundo!')
    return};
    MostrarHola();

function MostrarNombre(Nombre){
    console.log(`¡Hola, ${Nombre}!`)
    return};
MostrarNombre('Juan');

function Doble(Numero){
    console.log(parseInt(Numero)*2);
    return};
Doble(8);

function Promedio(Num1, Num2, Num3){
    let Prom = (Num1 + Num2 + Num3)/3;
    return console.log(Prom)}
Promedio(1,2,6);

function Comparacion(NumA,NumB){
    // sentencia ?(pregunta si se cumple la sentencia) ResultadoReal(resultado que dará si esa pregunta da verdadero) : ResultadoFalso(resultado que dará si esa pregunta da falso)//
    return NumA > NumB ? NumA : NumB};
let NumeroMayor = Comparacion(6,9);
console.log(NumeroMayor);

function Cuadrado(NumeroCuadrado){
    return console.log(NumeroCuadrado * NumeroCuadrado)};
Cuadrado(8)