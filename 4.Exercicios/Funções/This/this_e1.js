objeto = {
  propriedade1: "nomeProduto",
  propriedade2: 10,
  propriedade3: "origem: Cuiabá",

  mostrar() {
    console.log(
      `o primeiro parametro é ${this.propriedade1}`
    ); /* em um contexto lexico, o parametro1 deve ser acessado com a utilzação do this  */
  },
};

objeto.mostrar(); 

/* o this é utilizado para acessarmos as propriedades dos objetos. */
