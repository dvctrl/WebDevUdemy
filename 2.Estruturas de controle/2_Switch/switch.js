const imprimirResultado = function(nota){
    switch (Math.floor(nota)){//a expressão não retorna true of false
        case 10:
        case 9:
            console.log('Quadro de Honra')
        break
        case 8: case 7: 
            console.log('Aprovado')
        break
        case 6: case 5: case 4:
            console.log('recuperação')
        break
       case 3: case 2: case 1: case 0: 
           console.log('tu é burro, ta reprovado')
           break

        default:
            console.log('valor inválido')
    }
    console.log('================================')
}
/*O Swith realiza todos os case, um a um,até a ultima linha
do bloco (o que não é o comportamento ideal) e por isso devemos
colocar o comando break, para ai sim encerrar o bloco de uma
vez */

imprimirResultado(10)
imprimirResultado(11)
imprimirResultado(5.6)
imprimirResultado(6.6)
imprimirResultado(7)
imprimirResultado(1)
imprimirResultado(1.22)
imprimirResultado(9,99)