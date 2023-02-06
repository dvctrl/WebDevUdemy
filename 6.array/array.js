/* array em JS, é um objeto!  */
console.log(typeof Array, typeof new Array(), typeof [])

let aprovados = new Array("bia", "carlos", "ana")

console.log(aprovados)

aprovados = ["bia", "carlos", "ana"]
console.log(aprovados)
console.log(aprovados[0])
console.log(aprovados[2])

aprovados[3] = "paulo"
console.log(aprovados[3])

aprovados.push("abia")
console.log(aprovados.length)
console.log(aprovados)
aprovados[9] = "rafael"
console.log(aprovados.length)
console.log(aprovados)

console.log(aprovados.sort()) /* ordena de forma alfabetica */
delete aprovados[1]

console.log(aprovados)
console.log(aprovados[2])

aprovados = ["bia", "carlos", "ana"]
aprovados.splice(1, 1, 'elemento1')
console.log(aprovados)
