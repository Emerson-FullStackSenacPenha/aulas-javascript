'use strict'

/* 
Loops ou estruturas de repetição são comandos que, baseados em alguma condição lógica, são programados para executar ações repetidas vezes.

Comandos mais tradicionais: while (Enquanto) e for (Para)

Normalmente, os loops são controlados através de uma variável contadora.

Está variável "contador" é chamada de "i", "j", "k" ou qualquer outra letra se necessário.

"Cont", quando é relacionado a dados

*/
console.log("Exemplo 1: WHILE (enquanto)");

let i = 1;
while(i <= 5){
    console.log("Valor do i: + "+i);
    i++; // incremento
    // i = i + 1 (seria a mesma coisa)
}

console.log("\nExemplo 2: FOR (para)");

/* for( inicialização da variável; condição, atualização ) */

for( let j = 1; j <= 10; j++ ){
    console.log("J vale "+j);   
}
