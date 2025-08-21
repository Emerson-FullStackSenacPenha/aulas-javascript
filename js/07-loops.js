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

console.log("\nExemplo 3: loop regressivo");
for( let k = 10; k >=0; k-- ){
    console.log("K vale "+k);
}

console.log("\nExemplo 4: Loop e Array");

const bandas = ["Slayer", "Metallica", "Iron Maiden", "NightWish", "Judas Priest"];

// Usando loop for tradicional

for( let i = 0; i < bandas.length; i++ ){
    console.log( bandas[i] );   
}

console.log("\n---------\n");

// Usando loop for/of (excluisvo do JS)

for( const banda of bandas ) {
    console.log(banda);
}


console.log("\nExemplo 5: loop e objeto");

const pessoa = {

    nome: "Fulano da Silva",
    idade: 40,
    cidade: "São Paulo",
    estado: "SP"

};

// Usando o loop for/in para objetos (exclusivo do JS)

for(const prop in pessoa){
    console.log(pessoa[prop]);   
}

console.log("\n Exercicios de Looping");

const clientes = [

    {
        nome: "Dio",
        identificador: "1"
    },

    {
        nome: "Ozzy",
        identificador: "2"
    },

    {
        nome: "Ian",
        identificador: "3"
    }

];


console.log(`Clinete: ${clientes[0].nome}, ID: ${clientes[0].identificador}`);
console.log("Cliente: " + clientes[0].nome + ", ID: " + clientes[0].identificador );


let k = 0;
while(k < clientes.length){
    console.log(`Clinete: ${clientes[k].nome}, ID: ${clientes[k].identificador}`);
    k++;
}

for( let i = 0; i < clientes.length; i++ ){
    console.log("Cliente: " + clientes[i].nome + ", ID: " + clientes[i].identificador );  
}


for( const banda of clientes ) {
    console.log(banda);
}







const armario = [

    {
        cor: "Vermelho",
        tamanho: "P",
    },

    {
        cor: "Verde",
        tamanho: "M",
    },

    {
        cor: "Azul",
        tamanho: "G",
    }

]

console.log(`A minha meia ${armario[1].cor} é do tamanho ${armario[2].tamanho}`);
console.log("A minha meia "+ armario[2].cor + " é do tamanho " + armario[0].tamanho);

























































