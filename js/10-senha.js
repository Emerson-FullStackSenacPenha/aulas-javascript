'use strict'

const campoSenha = document.querySelector("#senha");
const botaoMostrar = document.querySelector("#mostrar");

/*
Monitoramos o evento pointerdown/pointerup pois ele funcionará tanto para o acionamento com mouse no desktop quanto com o dedo em mobile
*/


botaoMostrar.addEventListener("pointerdown", function(){
    // Tá "Segurando" o botão? Troca o type para text e mostra senha
    campoSenha.type = "text";
});

botaoMostrar.addEventListener("pointerup", function(){
    // Soltou o botão ? Volta type para password
    campoSenha.type = "password";

});

botaoMostrar.addEventListener("pointerout", function(){
    // Moveu o botão ? Volta type para password
    campoSenha.type = "password";

});