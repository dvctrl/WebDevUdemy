const imprimirResultado = function (nota){
    if(nota  >= 7){
        console.log('Mandou bem, aprovado!')
    } else {
        console.log('Voce foi burro, então reprovado!')
    }
}
imprimirResultado(8)
imprimirResultado(6)
imprimirResultado(5.4)
imprimirResultado('epa')//cuidado!!!
/*Neste exemplo, como JavaScript é fracamente tipada, 
ele permite que eu coloque uma string dentro da minha const
e ele ainda tentará comparar a sting com a minha condição 
'nota>= 7' e como será false, ele irá informar que o aluno
foi reprovado*/