function asignarTexto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function textoRepetido(str) {
    if (str.length === 0) return ""; 

    let resultado = "";
    let contador = 1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            contador++;
        } else {
            resultado += str[i] + contador;
            contador = 1;
        }
    }

    return resultado;
}

function repetidos() {
    const entrada = document.getElementById('entradaTexto').value;

    if (entrada === "") {
        asignarTexto('p', `ingresa un texto consecutivo`);
       
        return;
    }


    const resultado = textoRepetido(entrada);
    asignarTexto('p', `repetidos ${resultado}`);
    
}
