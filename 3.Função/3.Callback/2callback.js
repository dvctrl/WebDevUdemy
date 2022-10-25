const notas = [7.7, 6.4, 6.2, 6.1, 5.5, 9.0]

// sem callback
const notasBaixas1 = [] 
for (let i in notas){
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

//notas com callback
const notasBaixas2 = notas.filter(function(nota) {
        return nota < 7
})

console.log(notasBaixas2)
//notas com callback 2
const notasMenorQueSete = nota => nota < 7
const notasbaixas3 = notas.filter(notasMenorQueSete)
console.log(notasbaixas3)