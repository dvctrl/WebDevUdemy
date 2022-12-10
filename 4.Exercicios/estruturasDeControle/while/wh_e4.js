let salarioAprendiz = 1500
let salarioAnalistaJr = 1500

do{
    salarioAprendiz += 100
    console.log(`-- Atualização salarial realizada\n --VALORES ATUALIZADOS: ${salarioAprendiz.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}\n.............`)
}while (salarioAprendiz < salarioAnalistaJr)

/* Mesmo que o valor for false, em DO.. WHILE o bloco
 de código será executado pelo menos uma vez */