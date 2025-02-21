function asignarTexto(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
}



Array.prototype.miReduce = function(callback, valorInicial) {
  let acumulador = valorInicial === undefined ? this[0] : valorInicial;
  let indiceInicial = valorInicial === undefined ? 1 : 0; 

  for (let i = indiceInicial; i < this.length; i++) { 
      acumulador = callback(this[i], acumulador);
  }

  return acumulador;
};

const numeros = [1, 2, 3];

const suma = numeros.miReduce((acumulador, numero) => {
  return acumulador + numero;
}, 0);

asignarTexto("h2", `el arreglo es: ${numeros}`);
asignarTexto("p", `la suma del array es: ${suma}`);
console.log(suma); 