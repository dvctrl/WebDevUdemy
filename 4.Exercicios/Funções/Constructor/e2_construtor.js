class itemCesta {
  constructor(produto, valorPago, quantidade, quemComprou) {
    this.produto = produto;
    /* this.valorPago = valorPago;
    this.quantidade = quantidade;
    this.quemComprou = quemComprou; */
  }

  mostrarItem = () => {
    console.log(`O item comprado foi: ${this.produto}`);
  };
}

produto = () => {
  this.getProduto = () => {
    return this.produto;
  };
};

produto.prototype = new itemCesta('abacaxi');

console.log(abacaxi.mostrarItem())


