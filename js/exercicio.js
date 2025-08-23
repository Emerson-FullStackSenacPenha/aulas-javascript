'use strict';


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



