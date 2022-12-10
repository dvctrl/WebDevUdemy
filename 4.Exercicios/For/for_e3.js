let carrinho = new Array();
    carrinho[0] = ["A volta dos que nao foram", 26.9, 1];
    carrinho[1] = ["A volta dos foram e esqueceram de voltar antes", 60.9, 1];
    carrinho[2] = ["Blade, o vampirão", 22.9, 1];
    let valorTotalCarrinho = 0;

for (let i = 0; i < carrinho.length; i++) {
  valorTotalCarrinho += carrinho[i][1];
  console.log(` FILME: "${carrinho[i][0]}",\n$VALOR:  ${carrinho[i][1].toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}, QTD:  ${carrinho[i][2]}`);
}
let valorFinal = valorTotalCarrinho.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
console.log(`.......\n--ValorTotalDaCompra: ${valorFinal}`);
