/* 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.
 */
function calculos(a,b){
    return console.log(`
        soma: ${a + b}\n
        subtração: ${a - b}\n
        multiplicação: ${a * b}\n
        divisão: ${a / b}
    `)
}


calculos(9,8)