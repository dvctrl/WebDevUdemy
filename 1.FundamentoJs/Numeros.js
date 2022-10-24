const peso1 = 1.0
const peso2 = Number('2.0')
console.log (peso1, peso2)
/*Number.isInteger e uma função para saber se o valor inserido é um num inteiro */
console.log (Number.isInteger(peso1))
console.log (Number.isInteger(peso2))

const avaliacao1 = '9.871'
const avaliacao2 = '6.871'

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log (total)
console.log (media.toFixed(2))// tirar casas decimais
console.log (media.toString(2))// retorna em numero binario
console.log (typeof media)// retornar o tipo da constante
console.log (typeof Number)// retornar o tipo da função 