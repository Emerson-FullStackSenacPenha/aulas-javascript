'use strict';

'use strict';

/* =====================================
   EXERCÍCIOS DE ARRAYS E OBJETOS
   =====================================

1. Array simples
   - Crie um array chamado "frutas" com 5 frutas.
   - Imprima a primeira e a última fruta usando console.log().

2. Modificando um Array
   - Crie um array "numeros" com 5 números.
   - Altere o terceiro número para outro valor.
   - Imprima todo o array.

3. Objeto simples
   - Crie um objeto "carro" com propriedades: marca, modelo, ano.
   - Imprima o modelo do carro usando console.log().

4. Objeto com Array
   - Crie um objeto "armario" com uma propriedade "gavetaDeMeias" que seja um array com 4 cores de meias.
   - Imprima a primeira e a última meia.

5. Array de Objetos
   - Crie um array "armarios" com 2 objetos.
   - Cada objeto representa um armário com propriedades "camisa" e "calca".
   - Imprima a cor da camisa do segundo armário.

6. Objeto com Array dentro de Objeto
   - Crie um objeto "quarto" com uma propriedade "armario" que seja um objeto.
   - Dentro de "armario", crie uma propriedade "gavetas" que seja um array de elementos (ex.: nomes ou conteúdos).
   - Imprima o primeiro elemento da gaveta.

7. Exercício Avançado – Armários do Quarto2
   - Crie um objeto "quarto2" com uma propriedade "armarios2", que é um array de 2 objetos.
   - Cada objeto representa um armário com 2 gavetas:
       - "gavetaCamisas2" → array com 3 cores de camisas
       - "gavetaMeias2" → array com 3 cores de meias
   - Imprima a segunda camisa do segundo armário e a primeira meia do primeiro armário.
   - Troque a cor da primeira camisa do primeiro armário para outra cor.
   - Imprima o array de camisas do primeiro armário depois da alteração.

*/

// 1
let frutas = ["banana", "maça", "laranja", "uva", "melão"];

console.log(`As frutas que o exercicio pede são ${frutas[0]} e ${frutas[4]}`);
console.log("As frutas que o exercicio pede são, " + frutas[0] + " e " + frutas[4]);

// 2
let numeros = [1,2,3,4,5]

console.log(numeros);

// 3
let carro = {

    marca: "Fiat",
    modelo: "Uno",
    ano: "2025"

};

console.log(`O modelo do meu carro é ${carro.modelo}`);
console.log("O modelo do meu carro é " + carro.modelo);

// 4
let armario = {

    gavetaDeMeias: ["azul", "verde", "amarelo", "vermelho"]

};

console.log(`Minhas meias preferidas são as das cores ${armario.gavetaDeMeias[0]} e ${armario.gavetaDeMeias[3]}  `);
console.log("Minhas meias preferidas são as das cores " + armario.gavetaDeMeias[0] + " e " + armario.gavetaDeMeias[3]);


// 5
let armarios = [

    {
        camisa: "verde",
        calca: "amarelo"
    },

    {
        camisa: "preta",
        calca: "branco"
    }

];

console.log(`Minha camisa preferida é da cor ${armarios[1].camisa}`);
console.log("Minha camisa preferida é da cor " + armarios[1].camisa);


// 6
let quarto = {

    armario : {

        gavetas:["nomes", "conteudos"]

    }

}

console.log(`${quarto.armario.gavetas[0]}`);
console.log(quarto.armario.gavetas[0]);

//7

let quarto2 = {

    armarios2:[

        {
            gavetaCamisas2: ["verde claro", "verde escuro", "verde"],
            gavetaMeias2: ["preto", "branco", "cinza"]
        },

        {
            gavetaCamisas2: ["azul claro", "azul escuro", "azul"],
            gavetaMeias2: ["laranja", "marrom", "roxo"]
        }

    ]

} 

console.log(` A segunda camisa do segundo armário é da cor ${quarto2.armarios2[1].gavetaCamisas2[1]}, e a primeira meia do primeiro armário é da cor ${quarto2.armarios2[0].gavetaMeias2[0]}`);

console.log( "A segunda camisa do segundo armário é da cor " + quarto2.armarios2[1].gavetaCamisas2[1] + ", e a primeira meia do primeiro armário é da cor " + quarto2.armarios2[0].gavetaMeias2[0]);

quarto2.armarios2[0].gavetaCamisas2[0] = "rosa"

console.log(` A cor da primeira camisa do primeiro armário era verde claro, agora é ${quarto2.armarios2[0].gavetaCamisas2[0]} `);

console.log("A cor da primeira camisa do primeiro armário era verde claro, agora é " + quarto2.armarios2[0].gavetaCamisas2[0]);



