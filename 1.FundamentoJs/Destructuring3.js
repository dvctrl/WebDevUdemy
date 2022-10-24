function rand({ min = 0, max =1000}){
    const valor = Math.random()*(max-min)+min
    return Math.floor(valor)
}
console.log(rand({max: 0, min:100}))
console.log(rand({min:10}))
console.log(rand({max:95}))
console.log(rand({}))
console.log(rand())