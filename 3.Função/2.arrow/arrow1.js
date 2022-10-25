/*
*Arrow Functions tem uma finalidade util para 
* funções com apenas um parametro
*/

function dobro(a) {
    return 2 * a
}

dobro = a =>{
    return 2*a
}


dobro = a => 2 * a // return esta implicito


console.log(dobro(Math.PI))

let ola = function(){
    return 'olá!'
}

ola = () => 'olá'
ola = _ => 'olá'//possui parametro, mas não é obrigatório

console.log(ola())

