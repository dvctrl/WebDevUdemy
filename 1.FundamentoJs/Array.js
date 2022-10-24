/* m array é uma coleção de um ou mais objetos, 
do mesmo tipo, armazenados em endereços adjacentes 
de memória. Cada objeto é chamado 
de elemento do array. 
Da mesma forma que para variáveis simples,
damos um nome ao array*/

const valores = [7.7, 8.9, 9.8, 9.9]

console.log(valores[0], valores[2], valores[3])
console.log(valores[4])

valores[4] = 10

console.log(valores)
console.log(valores[4])
console.log(valores.length)
console.log(valores.push(11.10))
console.log(valores.push({id: 3}, false, null, 'teste'))
console.log(valores)

console.log(valores.pop())
delete valores
console.log(valores)
console.log(typeof valores)
