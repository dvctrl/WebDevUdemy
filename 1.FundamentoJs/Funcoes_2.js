// armazenando funcao em uma variavel

const imprimirSoma = function(a, b){
    console.log(a + b);
} 

imprimirSoma(2,3)

//armazenando uma funcao arrow em uma variavel

const soma = (a, b) => {
    return a + b
}

console.log (soma(5, 8))

//return implicito

const subtracao = (a, b) => a - b

console.log (subtracao(100, 120))

// exemplo de função dvd zueiro
function xelo (a, b) {
        console.log (a+b)
}

xelo("ximira,", " xeeelo!!")