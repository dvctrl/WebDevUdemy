var a = 3 /* aqui eu dei o 'valor' 3 e o identificador 'A' 
(O indentificador é fundamental)*/
let b = 4 /*a regra geral é utilizar sempre o Let ao invés do var, 
assim é uma forma atualizada de criar variavel*/

/* Em var, você pode redeclarar uma variavel mais de uma vez
o que em resumo, não faz muito sentido lógico, perceba que por essa razão, o Let
não pode ser executado novamente, pois ele ja foi declarado como '4' */
var a = 30
b 

console.log(a, b)

a = 300
b = 400

console.log(a, b)

const c = a + b

console.log( "a soma das variaveis A + B é igual a: " + c)