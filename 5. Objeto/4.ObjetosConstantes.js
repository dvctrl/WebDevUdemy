// pessoa -> 123 -> {...}
const pessoa = {nome: 'joao'}
pessoa.nome= 'Pedro'

// pessoa -> 456 -> {...}
//pessoa = {nome: 'ana'}
// não se pode atribuir a uma constante, uma unica vez! 

Object.freeze(pessoa)
//freeze pessoa "congela" a const e não se pode inserir mais valores nele

pessoa.nome = 'Maria'
pessoa.end = 'rua dos loucos'
console.log(pessoa)
//podemos criar de um modo que deste o inicio, a sua constante sendo um objeto fixo e sem alterações
const pessoaConstate = Object.freeze({nome: 'joao'})