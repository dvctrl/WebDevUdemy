/* Exercicios para First Class Citizen */

function professor() {
  return "professor";
}

function estudante() {
  return "estudante";
}

function usuario(user) {
    console.log(`seja bem vindo ${user()}`);
}

let mensagem = usuario(professor)
let mensagem2 = usuario(estudante)