let valor //não inicializada

console.log(valor)
//console.log(valor2) // este valor nem ao menos foi declarado, por isso ocorreu o erro

valor = null // ausencia de valor || voce inicializou, entretando, não há valor aqui
// não use o undefined para os valores de variaveis || sempre use null
console.log(valor)
//console.log(valor.toString()) // Não há como ler uma variavel Null, para não ler uma variavel s/referencia

const produto = {}
console.log(produto.preco) // ausencia de valor || sem preco definido no objeto
console.log(produto) 

produto.preco = 3.50
console.log(produto)// agora voce atribuiu um valor ao objeto

produto.preco = undefined // evite atribuir undefined (SEMPRE!!!!!!)
console.log(!!produto) 
//delete produto.preco
console.log(produto)

produto.preco = null // sem preco

console.log(!!produto.preco)
console.log(produto)
