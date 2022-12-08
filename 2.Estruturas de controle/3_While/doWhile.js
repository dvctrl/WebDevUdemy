/* The do...while statement creates a loop that executes a specified statement until the test condition evaluates to false. The condition is evaluated after executing the statement, 
resulting in the specified statement executing at least once. -MDN DOCS */

let resultado = " ";
let i = 0;

do {
  i++;
  resultado += i;
} while (i < 5);

console.log(`valor do primeiro exemplo ${resultado}`);

console.log(".........")
/* Exemplo de código Udemy */
let getInteiroEntre = function (min, max) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
};

let opcao = 0;
let respostas = ' '
do {
  opcao = getInteiroEntre(-1, 10);
  console.log(`a opção escolhida foi ${opcao}`);
} while (opcao != -1);
