'use strict'

/* Exemplo 01 */

// Procurando (querySelector) por um elemento chamado exemplo1
const exemplo01 =  document.querySelectorAll("#exemplo1");
const mensagem01 = document.querySelectorAll("#mensagem01");
const pagina = document.querySelectorAll("body");

console.log(exemplo1);
console.log(mensagem01);
console.log(pagina);

/*
Para selecionar vários elementos, use querySelectorAll. O resultado é uma esp´[ecie de array de elementos (NodeList).
*/

const paragrafo = document.querySelectorAll("p");
console.log(paragrafo);
