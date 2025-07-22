// Questão 11: Variáveis var, let e const
var x = 10;
let y = 20;
const z = 30;

// Questão 12: Correção da função JavaScript
function exibirMensagem() {
  let nome = prompt("Digite seu nome");
  alert("Olá " + nome);
}

// Questão 13: Funções anônimas e arrow functions
const anonima = function() {
  console.log("Função anônima");
};

const seta = () => {
  console.log("Arrow function");
};

// Questão 14: Evento click em botão
document.getElementById('btn').addEventListener('click', () => {
  console.log("Botão clicado!");
});

// Questão 15: Uso do querySelector()
document.querySelector("#titulo").textContent = "Novo conteúdo";

// Questão 16: Estruturas de controle if, else if e switch
let x = 2;

if (x === 1) {
  console.log("Um");
} else if (x === 2) {
  console.log("Dois");
} else {
  console.log("Outro");
}

switch(x) {
  case 1:
    console.log("Um");
    break;
  case 2:
    console.log("Dois");
    break;
  default:
    console.log("Outro");
}
