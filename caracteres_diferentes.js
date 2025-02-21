function asignarTexto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function compararStrings() {
    const str1 = document.getElementById('palabra1').value;
    const str2 = document.getElementById('palabra2').value;
    
    let diferencia = 0;
    let longitudMax = Math.max(str1.length, str2.length);
    
    for (let i = 0; i < longitudMax; i++) {
        if (str1[i] !== str2[i]) {
            diferencia++;
        }
    }

    
    if (diferencia > 0) {
        asignarTexto("p", `Tiene ${diferencia} ${(diferencia === 1) ? 'diferente' : 'diferencias'}`);
    } else {
        asignarTexto("p", "No tiene caracteres diferentes");
    }
}

