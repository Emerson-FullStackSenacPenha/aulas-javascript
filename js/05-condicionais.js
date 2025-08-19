'use strict';

/* Comandos condicionais mais comuns: 
if   ->  SE
else -> SENÃO
*/

console.log("Emxeplo 1");

let numero = 50;


// Condicional SIMPLES (Usa apenas if)

if (numero >= 10) {

    console.log("Se você está vendo essa mensagem, é porque a condição é VERDADEIRA!");

}

console.log("\nExemplo 2");

let aluno = "Ozzy"
let idade = 30;

/* Lógica: Verificar se o aluno é maior ou menor de idade. */
if (idade < 18) {
    console.log("Você é menor de idade!");
} else {
    console.log("Você é maior de idade!");
}

// Exercicios de Condicionais

let nota_1 = 3
let nota_2 = 7

let media = (nota_1+nota_2)/2

if (media >= 7) {
    console.log("Aprovado!🐱");
} else {
    console.log("Reprovado!😿");
}




