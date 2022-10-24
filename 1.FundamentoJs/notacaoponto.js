console.log(Math.ceil (6.1))

const obj1 = {}
obj1.nome = "bola"
//obj1['name'] = "bola2"

console.log(obj1.nome)

    function Obj(nome) {
        this.nome = nome
        this.exec = function () {
            console.log('executado')
        }
    }

const obj2 = new Obj('cadeira')
const obj3 = new Obj('mesa')

console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()