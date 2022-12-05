const imprimirResultado = function (nota){
    if(nota  >= 7){
        console.log('Mandou bem, aprovado!')
    } else {
        console.log('Voce foi burro, então reprovado!')
    }
}

function seForVerdade(valor) {
    if(valor) {
        console.log('é verdade...' + valor)
    }
}



imprimirResultado(8)
imprimirResultado(6)
imprimirResultado(5.4)
imprimirResultado('epa')//cuidado!!!
seForVerdade()
seForVerdade(null)
seForVerdade(10)
seForVerdade(1)
seForVerdade(NaN)
seForVerdade('')
seForVerdade(10)
seForVerdade(' ')
seForVerdade('?')






/*Neste exemplo, como JavaScript é fracamente tipada, 
ele permite que eu coloque uma string dentro da minha const
e ele ainda tentará comparar a sting com a minha condição 
'nota>= 7' e como será false, ele irá informar que o aluno
foi reprovado*/