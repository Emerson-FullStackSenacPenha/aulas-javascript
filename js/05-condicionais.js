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

// Testando com 3 condições

console.log("Teste 3");

let resultado = 4

if (resultado <=5) {
    console.log("Vixi");
} else if ( resultado == 6) {
    console.log("Aee");
} else {
    console.log("Zica!");
}


/* Verificando o desempronho do aluno conforme a média:

- Média acima de 9 ? Ótimo
- Média acima de 7 ? Bom
- Média acima de 5 ? Ruim
- Média até 5 ? Péssimo */
let notas = 5

if (notas >9) {
    console.log("Ótimo");
} else if(notas >7) {
    console.log("Bom");
} else if(notas >5) {
    console.log("Ruim");
} else {
    console.log("Péssimo");
}

// Condicional composta com operador ternário ( ?: )

let situacao = idade >= 18 ? "Maior" : "Menor";
console.log(situacao);
