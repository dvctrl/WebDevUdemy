var numero = 1
{
    let numero = 2
    console.log('dentro = ',numero)
}
console.log('fora = ',numero)

/*como os valores estão em escopo diferente, e eu tenho uma variavel em um escopo menor,
 então o escopo menor sera a prioridade */

 /**
  * Variaveis definidas com a palava VAR
  *     escopo de: funcao e global
  * Variaveis definidas com a palava LET
  *     escopo de: global, funcao, bloco
  */