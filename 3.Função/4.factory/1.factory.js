// factory simples

function criarPessoa() {
  return {
    nome: "ana",
    sobrenome: "silva",
  };
}
console.log(criarPessoa());

/* desafio do COD3R */
function criarProduto(nome, valor, desconto) {
  return {
    nome,
    valor,
    desconto,
    mostarProduto() {
      return `${nome}, o valor é ${valor} com o desconto de ${desconto} `;
    },
  };
}

let pasta = criarProduto("pasta de dente", "12.00", 0.1);
let yorgut = criarProduto("yorgut", "2.00", 0);

console.log(pasta.mostarProduto());
console.log(yorgut.mostarProduto());
