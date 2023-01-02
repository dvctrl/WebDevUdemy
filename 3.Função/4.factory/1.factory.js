// factory simples

function criarPessoa() {
  return {
    nome: "ana",
    sobrenome: "silva",
  };
}
console.log(criarPessoa())
function criarProduto(nome, valor, desconto) {
  return {
    nome: nome,
    valor: valor, 
    desconto: desconto,
        mostarProduto(){
            return `${nome}, o valor é ${valor} com o desconto de ${desconto} `
        }
  };

}

let pasta = criarProduto('pasta de dente', '12.00', 0.10)
let yorgut = criarProduto('yorgut', '2.00', 0)
console.log(pasta.mostarProduto())
console.log(yorgut.mostarProduto())

