'use strict';

// Declarar uma array (vetor)
let vocalistas = ["Ozzy", "Dio", "Lemmy", "David Gilmour"];

// Se quisermos visualizar a estrutura do array interio:
// console.log(vocalistas);

// Acessando um determinado elemento através do índice
console.log(vocalistas[0]);

// O David Gilmour está em turnê tocando Pink Floyd
console.log(`O ${vocalistas[3]} está em turnê tocando Pink Floyd`);

// Relembrando como criar/usar arrays (vetor)
// No Js, você pode colocar qualquer coisa em um array, com dados de tipos diferente
let seila = 6;
const coisas = [10, "Senac", "<h2>Oie</h2>", setInterval, 15.88];

console.log(coisas[1]);
console.log(coisas[4]);

/* Exercicio (FAÇA AQUI MESMO!) */

// 1) Crie um array contendo o nome de 7 coisas que você gosta (exemplos: artista, músicas, livros, comida... sei lá, inventa!)

// 2) Em seguida, mostre no console uma frase presonalizada indicando o seguindo, o quinto e o sétimo elemendo do array. Use concatenação e/ou template string.

const bandas = ["Nirvana", "Alice in Chains", "Pearl Jam", "Stone Temple Pilots", "Bush", "Silverchair", "Melvins"]

console.log(`Nos anos 90, o grunge estava em alta com bandas como ${bandas[1]} e a consagrada ${bandas[4]}, sem deixar de esquecer da banda ${bandas[6]} `);

console.log ("Nos anos 90, o grunge estava em alta com bandas como " + bandas[1] + " e a consagrada " + bandas[4] + ", sem deixar de esquecer da banda " + bandas[6] )




/* Array como Matriz de 2 dimensões */
const tecnologias = [

    ["HTML", "CSS", "JAVASCRIPT"], 
    ["FIGMA", "PhotoShop"],
    ["PHP", "Node.js", "SQL", "Express"]

];

console.log(tecnologias);
