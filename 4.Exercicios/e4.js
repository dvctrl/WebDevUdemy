/* 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.*/


function divisao(dividendo, divisor){
  let conta = dividendo/divisor
  let resto = dividendo % divisor
  return console.log(`resultado é ${conta} e o resto é ${resto}`)
}

divisao(5,2)
divisao(3,4)
divisao(6,5)
divisao(90,2)
divisao(2,2)
divisao(7504,12)
