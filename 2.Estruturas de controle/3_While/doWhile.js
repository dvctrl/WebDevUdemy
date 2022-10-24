/* Diferente da estrutura While, o Do/While 
 * não é necessário atribuir um valor inicial para a variável numero,
 *  ou seja, fazendo assim
 */

function numAleatorio(min, max){
    const valor = Math.random()*(max- min) + min
    return Math.floor(valor)
}

let numero //valor inicial nulo

do {//dowhile é pouquissimo utilizada no campo da programação
    numero = numAleatorio(1,10)//embaralhar os numeros de 1 a 10
    console.log(`numero ${numero}`)
} while(numero != 8)//é diferente de 8? true=continua / false=para

console.log('fim da consulta')