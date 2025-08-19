'use strict';

/*
Operadores LÒGICOS

&&  -> E            -> AND
||  -> OU           -> OR
!   -> NÂO/NEGAÇÃO  -> NOT
*/

console.log("Exemplo &&");
let idade = 16;
let temCarta = true;

// if (idade >= 18 && temCarta === true) { Comparando explicidamente

if (idade >= 18 && temCarta ) { // Comparando implicidamente
    console.log("Pode dirigir");
} else{
    console.log("Não pode dirigir");
}

/* Sobre duplo e triplo sinal de igual */

let a = 10;
let b = '10';
let resultadoComparacao = a === b; //False
// let resultadoComparacao = a == b; True
console.log(resultadoComparacao);

/* Sobre duplo e triplo sinal de igual

Ao usar == a comparação é domente do VALOR, ou seja, não importa o tipo de dados (String, Number, Etc)

Ao usar === a comparação é do VALOR e do TIPO de dado, ou seja, importa tudo. */

console.log("\nExemplo ||");
// || -> retorna VERDADEIRO se pelo menos uma das condições for VERDADEIRA

let feriado = false;
let fimDeSemana = true;

// if(feriado === true || fimDeSemana === true){ explicito

if(feriado || fimDeSemana){ // implicito
    console.log("Não tem aula!");
}else{
    console.log("Tem aula!");
}


