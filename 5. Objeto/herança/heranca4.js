function meuObj() {}
console.log(meuObj.prototype)

const obj1 = new meuObj()
const obj2 = new meuObj()

console.log(
  obj1.__proto__ === obj2.__proto__
) /* todos obj criados por uma mesma função construtora apontam para o mesmo prototype */

console.log(meuObj.prototype === obj1.__proto__)

meuObj.prototype.nome = "Anonimo"
meuObj.prototype.falar = function () {
  console.log(`bom dia meu nome é ${this.nome}`)
}

console.log(obj1.nome)
obj1.falar()

obj2.nome = "rafael"
obj2.falar()
const obj3 = {}
obj3.__proto__ = meuObj.prototype
console.log(obj3.nome)

obj3.falar()
