function criarProduto (nome, preco, desconto = 0.1) {
    return {
        nome,
        preco, 
        desconto, 
    }
}

console.log(criarProduto('notebook', 2199.49));
console.log(criarProduto('Iphone', 11199.49));
console.log(criarProduto('havaianas', 199.49));