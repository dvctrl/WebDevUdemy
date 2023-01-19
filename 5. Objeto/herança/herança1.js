const ferrari = {
  modelo: "f40",
  velMax: 324,
}

const volvo = {
  modelo: "v40",
  velMax: 200,
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)

console.log(Object.prototype.__proto__)


function MeuObjeto(){}
console.log(typeof MeuObjeto, typeof Object)
console.log(Object.prototype, MeuObjeto.prototype)