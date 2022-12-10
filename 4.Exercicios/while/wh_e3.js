let salarioAprendiz = 1000
let salarioAnalistaJr = 1500

while (salarioAprendiz < salarioAnalistaJr){
    salarioAprendiz += 100
    console.log(`-- Atualização salarial realizada\n --VALORES ATUALIZADOS: ${salarioAprendiz.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}\n.............`)
}