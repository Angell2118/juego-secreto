let numeroSecreto = 0;
let numeroIntentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTLM = document.querySelector(elemento);
    elementoHTLM.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(numeroIntentos);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${numeroIntentos} ${(numeroIntentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }  else {
            if(numeroDeUsuario > numeroSecreto){
                asignarTextoElemento('p','El número secreto es menor');
            } else {
                asignarTextoElemento('p','El número secreto es mayor');                    
                }  
            numeroIntentos++;
            limpiarCaja();
        }


    return;
}

function limpiarCaja(){
document.querySelector('#valorUsuario').value = "";
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
            if(listaNumerosSorteados.includes(numeroGenerado)){
                return generarNumeroSecreto(); 
            } else{
                    listaNumerosSorteados.push(numeroGenerado);
                    return numeroGenerado;
                }
        }
 }

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número entre el 1 y ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    numeroIntentos = 1;

}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', true);

}

condicionesIniciales();




