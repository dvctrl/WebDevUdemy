// estratetégia 1 valor padrão 

function soma1(a,b,c){
    a = a || 1
    b = b || 1
    c = c || 1

    return a + b + c
    
}

console.log(`função1 -- ${soma1()}, ${soma1(1)}, ${soma1(1,2,3)}, ${soma1(0,0,0)}`)
/* Note que no exemplo acima, na function soma1, adicionamos dentro do bloco de código 
o operador OU. Logo, se o primeiro valor da expressão for false, ele ira receber 1. 
Note que existem anomalias no código, já que ele entende que 0 é false, logo, substituindo por 1; 
*/



function soma2(a,b,c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN ? 1 : c

    return a + b + c
} 

console.log(`função2 -- ${soma2()}, ${soma2(1)}, ${soma2(2,3)}, ${soma2(0, 0, 0)}`)

function soma3(a=1, b=1, c=1) {
    return a + b + c
}

console.log(`função3 -- ${soma3()}, ${soma3(1)}, ${soma3(2,3)}, ${soma3(0,0,0)}`)
