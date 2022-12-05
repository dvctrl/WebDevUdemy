function teste1(num){
    if(num > 7)
    console.log(num)
console.log('final')
}
teste1(6)
teste1(8)
/*Note que no exemplo acima, ao usar o if, temos somente
uma sentença de código ligada ao if(linha.3) e na linha 4
o resultado sempre será true.*/

function teste2(num) {
    if (num > 7); {
        console.log(num)
    }
}
teste2(6)
teste2(8)
/*No exemplo do teste2, perceba que o ';' separa o condicional
 * do bloco de código, logo, a função if pode ou não ser executada
 * enquanto o bloco de código que esta entre chaves {} ira executar
 * normalmente.
 * Nunca use ponto e virgula em estruturas de controle
 */
