/* Variáveis */

// Variável que pode mudar
let nome = "Jana";

// Valor fixo
const idade = 20;

// Mostra no console
console.log(nome);


/* 
Explicação:

let   -> variável que pode alterar
const -> valor fixo
*/

/* Funções */

// Função que soma dois números
function somar(a, b) {

    return a + b;

}

// Exibe resultado no console
console.log(somar(2, 3));


/* Alterando CSS com JavaScript */

// Muda a cor de fundo da página
document.body.style.backgroundColor = "lightblue";


/* Criando Elementos */

// Cria um novo parágrafo
const novo = document.createElement("p");

// Adiciona texto ao parágrafo
novo.innerHTML = "Novo parágrafo";

// Adiciona o parágrafo no body
document.body.appendChild(novo);