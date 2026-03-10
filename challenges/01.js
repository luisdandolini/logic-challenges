/*
  1) Observe o trecho de código:
  int INDICE = 12, SOMA = 0, K = 1;
  enquanto K &lt; INDICE faça
  { K = K + 1; SOMA = SOMA + K;}
  imprimir(SOMA);
*/

let indice = 12;
let soma = 0;
let k = 1;

while (k < 12) {
  k = k + 1;
  soma = soma + k;
}

console.log(soma); //77
