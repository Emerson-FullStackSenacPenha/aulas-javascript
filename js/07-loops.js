'use strict'

/* 
Loops ou estruturas de repetição são comandos que, baseados em alguma condição lógica, são programados para executar ações repetidas vezes.

Comandos mais tradicionais: while (Enquanto) e for (Para)

Normalmente, os loops são controlados através de uma variável contadora.
*/
console.log("Exemplo 1: WHILE (enquanto)");

let contador = 1;
while(contador <= 5){
    console.log("Valor do contator: + "+contador);
    contador++; // incremento
    // contador = contador + 1 (seria a mesma coisa)
}

