const pilotos = ["Vettel", "Hamilton", "Daniel Riccardo", "Checo Peres"]
/* remove o ultimo elemento do array
 */
pilotos.pop()
pilotos.push("Verstappen") /* Adiciona elemento no array no final */
pilotos.shift() /* remove o primeiro elemento do array */
pilotos.unshift("Goatifi") /* adiciona elemento na inicio do array */

console.log(pilotos)

/* splice pode adicionar ou remover elementos */

pilotos.splice(2, 0, "Bottas", "Massa")
console.log(pilotos)

/* remover elementos */
pilotos.splice(3, 1)
console.log(pilotos)


const algunspilotos = pilotos.slice(2) /* gera novo array */
console.log(algunspilotos)

const algunspilotos2 = pilotos.slice(1,4) /* gera novo array */
console.log(algunspilotos2)


