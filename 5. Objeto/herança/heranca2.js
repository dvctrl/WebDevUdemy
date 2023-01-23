/* cadeia de prototipos */
Object.prototype.attr0 = "z" //evite este tipo de manipulação
const avo = { attr1: "a" }
const pai = { __proto__: avo, attr2: "b", attr3: "d" }
const filho = { __proto__: pai, attr3: "c" }

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
  velAtual: 0,
  velMax: 200,
  acelerarMais(delta) {
    if (this.velAtual + delta <= this.velMax) {
      this.velAtual += delta
    } else {
      this.velAtual = this.velMax
    }
  },
  status() {
    return console.log(`${this.velAtual} KM/h de ${this.velMax} KM/h`)
  },
}
const ferrari = {
  modelo: "f40",
  velMax: 324,
}

const volvo = {
  modelo: "v40",
  status() {
    return `${this.velAtual} KM/h de ${super.status()} KM/h`
  },
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(230)
volvo.status(100)
ferrari.acelerarMais(340)
ferrari.status(100)
