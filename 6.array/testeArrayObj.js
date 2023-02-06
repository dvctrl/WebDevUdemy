/* não leve esse exercito a serio */

const quaseArray = { 0: "Rafa", 1: "ana", 2: "geraldo" }

Object.defineProperty(quaseArray, "toString", {
  value: function () {
    return Object.values(this)
  },
  enumerable: false,
})

console.log(quaseArray[0])

const meuArray = ["rafa", "ana", "geraldo"]

console.log(quaseArray.toString(), meuArray)
