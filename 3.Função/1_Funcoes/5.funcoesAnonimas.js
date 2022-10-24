const soma = function (x, y) {
    return x + y 
}

const imprimirResultado = function (a, b,operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3,4)
imprimirResultado(3,4, soma)
imprimirResultado(3, 4, function (x, y) {
    return x - y
})
//nem sempre é necessario para a criação de unma função nomea-la
//pode-se inserir uma função anonima dentro de outra função 

imprimirResultado(3,4, (x,y) => x * y)

const pessoa = {
    falar () {
        console.log('opa')
    }
}

pessoa.falar()