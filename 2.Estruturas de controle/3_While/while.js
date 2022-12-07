/* The while statement creates a loop that executes a specified statement as long as the test condition evaluates to true. 
The condition is evaluated before executing the statement. */

function getInteiroEntre (min, max) {
    const valor = Math.random() * (max-min) + min;
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) {
    opcao = getInteiroEntre(-1, 10)
    console.log(`a opção escolhida foi ` + opcao)
}
console.log('... fim ... ')
