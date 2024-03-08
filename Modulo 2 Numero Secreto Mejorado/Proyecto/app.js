/*LOS COMENTARIOS PRESENTES EN ESTE PROGRAMA SON DE CARÁCTER EXPLICATIVO PARA QUE YO COMO USUARIO FUTURO O DEMÁS GENTE QUE LEA ESTE CÓDIGO Y NO SEPA O NO RECUERDE EL USO DE CADA RESPECTIVO COMANDO AQUÍ PRESENTE*/

let NumeroSecreto = 0;
let ContadorIntentos = 0;
let NumerosUsados = [];
let ValorMaximo = 10

function Verificacion(){
    ContadorIntentos++;
    //parseInt(...) es una función de Java que convierte todos sus elementos en valores tipo numérico Int//
    //document.getElementById(...) es una función que devuelve un valor usando como referente de búsqueda a su ID//
    //"...".value 
    let ValorUsuario = parseInt(document.getElementById('NumeroUsuario').value);
    //typeof(...) retorna que tipo de dato es. Es decir si es string, number u otro//
    console.log(typeof(ValorUsuario));
    console.log(typeof(NumeroSecreto));
    console.log(`El numero ingresado por el usuario fue ${ValorUsuario}`);
    console.log(`El numero secreto es ${NumeroSecreto}`);
    // " = " define un valor, " == " compara 2 valores y retorna si coinciden o no en forma de true or false, " === " compara 2 valores y sus tipos para ver si coinciden o no en forma de true or false//
    console.log(NumeroSecreto === ValorUsuario)
    if (NumeroSecreto === ValorUsuario) {
        AsignarTextoHTML('p', `Acertaste el numero secreto. Lo has logrado en ${ContadorIntentos} ${ContadorIntentos === 1 ? "Intento" : "Intentos"} ¡Bien hecho!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        console.log(`Los números usados hasta ahora fueron ${NumerosUsados}`)}
    else if (NumeroSecreto < ValorUsuario) {
            AsignarTextoHTML('p','Lo Siento, Has Fallado. ¡Inténtalo de nuevo!. Pista: ¡El numero es menor!')}
        else {
            AsignarTextoHTML('p','Lo Siento, Has Fallado. ¡Inténtalo de nuevo!. Pista: ¡El numero es mayor!')};
    console.log(`${ContadorIntentos === 1 ? "Va" : "Van"} ${ContadorIntentos} ${ContadorIntentos === 1 ? "intento" : "Intentos"}`);
    LimpiarTexto()
    return};
    
//"function" es un comando usado para definir una función, siendo una función un bloque de código personalizado creado por el programador capaz de utilizar  multiples veces para comprimir gran cantidad de código// 
function AsignarTextoHTML(elemento, texto){
    // document.querySelector(...) es un comando que retorna el primer elemento del documento HTML que coincida con lo pedido dentro del paréntesis//
    let elementoHTML = document.querySelector(elemento);
    //"...".innerHTML es un comando que permite ingresar valores alfanuméricos que mostrar visualmente en un elemento especificado al inicio de la sentencia//
    elementoHTML.innerHTML = texto;
    //"return ..." finaliza la ejecución de la función y especifica un valor para ser devuelto a quien llama a la función //
    return};

function GenerarNumeroRandom() {
    //("...".length es un comando que devuelve la cantidad de elementos de una lista 
    if (NumerosUsados.length === ValorMaximo) {
        AsignarTextoHTML("p","Lo siento, pero Ya no Hay Mas Números Para Sortear")}
    else{
        NumeroSecreto = Math.floor(Math.random()*ValorMaximo)+1;
        if (NumerosUsados.includes(NumeroSecreto)){
            return GenerarNumeroRandom()}
        else{
            //"...".push es un comando que agrega al final de una lista un nuevo elemento//
            NumerosUsados.push(NumeroSecreto);
            return NumeroSecreto}}};

function LimpiarTexto(){
    let Limpio = document.querySelector('#NumeroUsuario');
    Limpio.value ='';
    return};

function ReiniciarJuego(){
    LimpiarTexto();
    Inicializar();
    document.getElementById('reiniciar').setAttribute('disabled','true');
    return}

function Inicializar(){
AsignarTextoHTML("h1", "Bienvenido al Juego del Número Secreto");
AsignarTextoHTML("p", `Ingresa un número del 1 al ${ValorMaximo}`);
GenerarNumeroRandom();
ContadorIntentos = 0;
return}

Inicializar()

/* "...".pop() es un comando que elimina el ultimo elemento de una lista determinada y lo devuelve */