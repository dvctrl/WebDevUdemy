// Coleção dinamica de chave/valor

const produto = new Object();
produto.nome = "cadeira";
produto["marca do produto"] = "generico";
produto.preco = 220;
/* nome que acima, existem algumas formas de criar propriedades para o seu o objeto; */
console.log(produto);
delete produto.preco;
delete produto.marca;
/* assim, como a formas de deletar as mesmas propriedades */

const carro = {
  modelo: "a4",
  valor: 89000,
  proprietario: {
    nome: "David",
    idade: 23,
    endereco: {
      logradouro: "rua dos bobos",
      numero: 0,
    },
  },
  /* conjunto de objetos */
  condutores: [{
	nome: 'Junior',
	idade: 18
  },{
	nome: 'Ana',
	idade: 32.
  }],
  
  calcularValor: function (){
	/* .... */
  }
};

/* podemos também adicionar vários objetos dentro de outro objeto. 
temos aqui o objeto carro -> proprietario -> endereço  */

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Rua dos Bobos'

delete carro.condutores
delete carro.proprietario.endereco
delete carro.proprietario.calcularValor

console.log(carro)