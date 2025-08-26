'use strict';

/*
Sobre Funções
Funções são blocos de códigos responsáveis por executar determinadas tarefas. Para usar estes blocos/funções, é necessário "Chamar/invocar" a função desejada através do seu nome.

Vantagens ao usar funções:

- Reutilização de códigos
- Organização de código-fonte, permitindo a separação de diferentes lógicas e responsabilidades
- Performace melhor
- Maior facilidade para manutenção

No JavaScript, existem várias maneiras de se criar uma função:

- Função anônima
- Função nomeada/declarada
- Arrow/Function
*/

console.log("Exemplo 1: Função anônima");
console.log("\n");

const exemplo1 = function(){
    // corpo da função: ação que a função vai fazer
    console.log("Olá, função anônima!");
};

exemplo1();

console.log(" \nExemplo 2: Função Nomeada/Declarada ");
function exemplo2(){
    console.log("Está é uma função nomeada!");
}

exemplo2();

console.log("\nExemplo 3: Arrow Function (Função Flecha/Seta)");


/*
Sintaxe potencialmente mais simples para funções no JavaSxcript
*/

const exemplo3 = () => {
    console.log("Sintaxe Arrow Function!");
};

exemplo3();

/*
Obs: Funções (em qualquer sintaxe) também podem trabalhar com parâmetros/argumentos.

Quando uma função precisa de valores/dados para algum tipo de processamento, ela recebe valores/dados através de parâmetros/argumentos entre parênteses.

Geralmente, ao terminar o processamento dos dados, a função "retorna para fora do resultado."
*/

console.log("\nExemplo 4: Função com parâmetro");

function saudacao( nome = "Visitante" ){
    console.log("Olá, "+nome);
}

saudacao("Emerson");
saudacao("Mônica");
saudacao("Catarina");
saudacao(); // Neste caso, é usado "Visitante" como valor


console.log("\nExemplo 5: Função com parâmetros e retorno");

function multiplicar(valor1, valor2){
 return valor1 * valor2
}

// Chamamos a função e recebemos o retorno/resultado dela
let resultado1 = multiplicar(10, 5);
let resultado2 = multiplicar(200, 10);

// Exibimos o resultado
console.log("Resultado 1 "+resultado1);
console.log("Resultado 2 "+resultado2);
