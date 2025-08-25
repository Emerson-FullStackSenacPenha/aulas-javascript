'use strict'

/*
criar variavel com valor
enquanto variavel for maior que o valor
mensagem que aparece
retire 1 valor
*/

/*
Exercício 1 – Contagem regressiva

Crie um loop que conte de 5 até 1 e imprima cada número.

Dica: use let numero = 5; e while.
*/

console.log("Exercicio 1");

let numero = 5
while ( numero > 0 ) {
console.log(numero);
numero = numero - 1;
}

console.log("Exercicio 2");

/*
Exercício 2 – Somando números

Crie um loop que some os números de 1 a 10 e mostre o total no final.

Dica: use uma variável para a soma e outra para contar de 1 a 10.
*/

let con = 1;
let som = 0;

while ( con <= 10 ) {
som = som + con;
con = con + 1;
}

console.log("Soma total: " + som);


console.log("Exercicio 3");
/*
Exercício 3 – Perguntando a senha

A senha é "1234".

Pergunte a senha usando prompt (ou uma variável para simular).

Enquanto a senha estiver errada, mostre "Senha incorreta".

Quando acertar, mostre "Acesso liberado!".
*/

let senha = 1230
while ( senha < 1234 ) {
console.log("Senha Errada!");
senha = senha + 1;
}

console.log("Exercicio 4");
/*
Exercício 4 – Comer balas

Você tem 7 balas.

Enquanto tiver balas, imprima "Comi uma bala!".

Tire uma bala a cada repetição.

No final, imprima "Acabaram as balas!".
*/

let balas = 7
while ( balas > 0 ) {
console.log("Comi uma bala!");
balas = balas -1;
}
console.log("Acabaram as balas");

console.log("Exercicio 5");

/* 
Exercício 5 – Números pares

Crie um loop que mostre todos os números pares de 2 a 20 usando while.
*/

let item = 2;
while ( item <= 20 ) {
console.log( item );
item = item + 2;
}

console.log("Exercicio 6");

/*
Exercício 8 – Contagem regressiva com alerta

Faça um loop de 10 até 1 usando while.

Mostre cada número com alert() no navegador.

No final, mostre "Fim da contagem!" com outro alert().
*/

let coisa = 10;
while ( coisa > 0 ) {
console.log(coisa);
coisa = coisa - 1;
}