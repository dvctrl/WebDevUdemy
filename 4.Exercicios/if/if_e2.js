
let notas = function mediaFinal(nota1,nota2){
        let media = (nota1 + nota2)/2
    if (media == 10){
        console.log(`aprovadissímo! a sua média foi de ${media}`)
    } else if (media >= 7) {
        console.log(`aprovado! a sua média foi de ${media}`)
    }else {
        console.log(`reprovado, bichão! a sua média foi de ${media}`)
    }
}

notas(8,10)
notas(1,5)
notas(10,10)
notas(5,7)
