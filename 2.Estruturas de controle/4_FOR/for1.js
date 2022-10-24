let contador = 1 //declaração de variavel
while(contador <=10){//expressão para informar se o laço continua
    console.log(`valor do contador = ${contador}`)
    contador++//encremento de contador
}
for(let i = 1; i <= 10; i++){
    console.log(`valor do contador = ${i}`)
}

/*
 * Perceba que a função for realiza a mesma coisa que o While
 * porém de uma forma mais sofisticada.
    *  Perceba que o temos a seguinte estrutura no while:
        *  let(declara o valor inincial da variavel)
        *  while(a expressão do laço)
        *  contador ++ (realiza a soma de +1 ao contador)
        *
    *  Utilizando o for temos as mesmas sentenças escritsas
 * de forma mais sutil:
        * let i = 1 (declaração incial)
        * i <= 10 (expressão do laço)
        * i++ (realiza a soma de +1 a declaração)
*/

/*
for em uma estrutura de array, onde ele ira percorrer todo 
o array e ao fim, ele ira sair do laço*/
const notas = [6.7, 7.4, 9.8, 8.1, 7.5]
for (let i = 0; i < notas.length; i++){
    console.log(`nota = ${notas[i]}`)
}