/* object preventExtensions */

const produto = Object.preventExtensions({
  nome: "Qualquer",
  preco: 1.99,
  tag: "promocao",
})

produto.nome = "borracha"
produto.descricao = "borracha branca"
delete produto.tag

console.log(produto)

/* Object seal */

const pessoa = { nome: "Juliana", idade: 35 }
Object.seal(pessoa)

pessoa.sobrenome = "silva"
delete pessoa.nome
pessoa.idade = 23

console.log(pessoa)

/* Object.frezze = selado + valores constantes  */

