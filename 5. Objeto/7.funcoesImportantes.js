const pessoa = {
    nome: 'rebeca',
    idade: 13,
    peso: 45
}

console.log(Object.keys(pessoa)) //conseguimos pegar as chaves do objeto 
console.log(Object.values(pessoa)) //conseguimos pegar os valores  do objeto 
console.log(Object.entries(pessoa)) //conseguimos pegar as chaves e os valores  do objeto 

Object.entries(pessoa).forEach(([chave, valor] )=> {
    console.log(`${[chave]}:${[valor]}` )}
    )

Object.defineProperty(pessoa,'dataNascimento', {
    enumerable: true,
    writable: false, 
    value: '01/01/2017'

})//podemos definir/criar atributos em uma propriedade

pessoa.dataNascimento = '01/03/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))


// Object.assing (ECMAScript 2015)

const dest = {a: 1}
const o1   = {b: 2}
const o2   = {c: 3, a: 4}

const objt = Object.assign(dest, o1, o2)//consweguimos concatenar todas as info dos demais objetos em um só

console.log(dest)