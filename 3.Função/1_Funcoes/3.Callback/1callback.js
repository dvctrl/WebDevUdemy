//a ideia do callback é passar uma funcao para outra funcão, e a segunda funcao será ativada

const fabricantes = ["Mercedes", "Audi", "BMW"];

function imprimirNome(nome, indice) {
  console.log(`${indice + 1}. ${nome}`);
} //funcao for it - ainda haverá uma aula sobre

fabricantes.forEach(imprimirNome);
fabricantes.forEach((fabricante) => console.log(fabricante));
