const notas = [7.7, 6.4, 6.2, 6.1, 5.5, 9.0]

let notasBaixas = [] 
/* SEM CALLBACK */
for(let i in notas) {
    if (notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

/* COM CALLBACK */

notasBaixas = notas.filter((nota) => {
   return nota <= 7
})

console.log(notasBaixas)

notasBaixas = notas.filter((nota) => {
    return nota >= 7
})

console.log(notasBaixas)