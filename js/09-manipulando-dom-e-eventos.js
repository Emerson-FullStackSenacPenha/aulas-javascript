'use strict'

/* Exemplo 01 */

// Procurando (querySelector) por um elemento chamado exemplo1
const exemplo01 =  document.querySelector("#exemplo1");
const mensagem01 = document.querySelector("#mensagem01");
const pagina = document.querySelector("body");

/*
Para selecionar vários elementos, use querySelectorAll. O resultado é uma esp´[ecie de array de elementos (NodeList).
*/

const paragrafo = document.querySelectorAll("p");
console.log(paragrafo);

/*
Sobre Evendos
Um evento é um acontecimento ou fenômeno que, quando acontece, dispara ações em nosso programa/site/aplicação.

O JavaScript suporta centenas de tipos de evendos. 

Exemplos:

Clique do mouse, pressionar teclas, tocar na tela, rolagem da página, carregamento da página e etc.
*/

// Exemplo detectando evendos

// Ao clicar x, adiciona um texto ao paragrafo de mensagem
exemplo01.addEventListener("click", function(){
    mensagem01.textContent = "Opa, evento funcionou!"

    // Adiciona a classe destaque
    mensagem01.classList.add("destaque");
});

// Ao clicar 2x, retira o texto do paragrado de mensagem
mensagem01.addEventListener("dblclick", function(){
    mensagem01.textContent = "";

    // Remove a classe destaque
    mensagem01.classList.remove("destaque");
});


/* Exercicios

1) Crie uma constatnte nova e selecione o H1 da sua página

2) Crie um evento em que, ao passar o mouse em cima do h1, o texto mude para "Praticando Eventos!" e também fique centralizado.

3) Faça também um evento de clique para que, quando clicar na palavra "Referências", o texto do H1 volte para a palavra "Eventos" e o alinhamento volta a ficar à esquerda (padrão).

*/

//1
const eventos =  document.querySelector("#eventos");

//2
eventos.addEventListener("mouseover", function(){
    eventos.textContent = "Praticando Eventos!";
    eventos.style.textAlign = "center";
});

//3
const referencias = document.querySelector("#referencias");

referencias.addEventListener("click", function(){
    eventos.textContent = "Eventos";
    eventos.style.textAlign = "left"
});
