/* O comando While tem como objeto gerar laços que tenham uma 
quantidade ideterminada de repetições; entretando, deve-se 
tomar cuidado com seu uso, pois em alguns casos, pode-se ficar
preso neste laço. */

function numAleatorio(min, max){
    const valor = Math.random()*(max- min) + min
    return Math.floor(valor)
}

let numero = 10 //valor inicial

do {//do while é pouquissimo utilizada no campo da programação
    numero = numAleatorio(1,10)//embaralhar os numeros de 1 a 10
    console.log(`numero ${numero}`)
} while(numero != 8)//é diferente de 8? true=continua / false=para


console.log('=====consulta encerrada====')
