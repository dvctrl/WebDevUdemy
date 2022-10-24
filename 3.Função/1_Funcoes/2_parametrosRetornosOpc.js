function area (largura, altura){//essa função não é nada pratica!!!
    const area = largura * altura
    if (area > 20){
        console.log(`valor acima do permitido: ${area}m2.`)
    } else {return area}
}

console.log(area(5,2))
console.log(area(5))
console.log(area())
console.log(area(5,2,3,17,22,25))
console.log(area(5,5))