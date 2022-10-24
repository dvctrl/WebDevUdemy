/* Para realizar uma desestruturação em um array */
const [a] = [10]
console.log(a)
/* Esta é uma forma de definir diversos elementos dentro de um array 
e extrair todas as informações a partir de um unico operador
'[]'*/
const [n1, , n3, ,n5, ,n7, ,n8, ,n9 = 0] = [10, 7, 9, 8, 11, 14]
console.log(n1,n3,n5,n7,n8,n9)

const [, [, nota]] = [[,8,8],[9,6,8]]
console.log(nota)

/** RESUMO
 * 
 * o DESTRUCTURING a partir de um objeto, ele será realizado
 * a apartir das chaves {} 
 * Quando esta extraindo informações de um ARRAY, devera ser 
 * utilizado colchete []
 * Se atente-se sempre a este ponto. 
 * 
 */