function soBoaNoticia(nota){
    if(nota >= 7){
        console.log('aprovado com ' + nota)
    } 
}

/**Em JavaScript,dentro de um bloco de código, como na função
 * se há 10 linhas de sentenças, ele ira executar uma por uma.
 * E com as estruturas de controle, você começa a 'selecionar'
 * qual sentença do código deverá ser executado em caso da 
 * condioção for true, como na função da linha 1:'Caso 'Nota' for
 * maior ou igual a 7 (se for true) então será executado
*/
soBoaNoticia(8.1)
soBoaNoticia(6.2)
soBoaNoticia(7.5)
/**
 * Note que no caso acima, o JS ignorou mostrar notas abaixo
 * de 7, pois em uma situação condicional, o JS sempre vai 
 * enterpretar uam situação de true ou false, e quando é false
 * o JS não irá imprimir o resultado. Seria algo como Undefined
 * 
 * Como Mostra o exemplo abaixo
 * a função seForVerdade tem apenas uma situação condicional, o
 * valor true
 */
function seForVerdade(valor){
    if(valor){
        console.log('temos um valor de ' + valor)
    }
}
seForVerdade()
seForVerdade(null)
seForVerdade(undefined)
seForVerdade(2)
seForVerdade(17)
seForVerdade(' ')
seForVerdade(-1)
seForVerdade({})
/* 
* Em todos os casos que a condição é false, a função não me 
retornará nenhum valor caso não esteja preenchida. Ou seja,
quando só houver o condicional true, ele não retornará o false.
*/