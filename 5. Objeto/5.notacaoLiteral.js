const a = 1
const b = 2
const c = 3

//antes da versão ES.6
const obj1 = {a: 1, b: 2, c: 3}
//--------------------------------------------------------
const nomeAttr = 'nota'
const valorAttr = 7.87

obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj5 = {
    funcao1: function() {
        //..
    },
    funcao2() { //nova forma de declarar uma funcão
        //....
    }
}

//versão atual
const obj2 = {a, b, c}
const obj4 = {[nomeAttr]:valorAttr}
console.log(obj4)
console.log(obj5)





