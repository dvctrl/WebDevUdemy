let arguments = {
    x: 42,
    getX: function() {return this.x}
}

let uboundX = arguments.getX
console.log(uboundX())

let boundX = arguments.getX.bind(arguments)
console.log(boundX())


let teste = typeof console.log

console.log(teste)