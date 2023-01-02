function sorteio (){
    const numeroSecreto = Math.random()*100
    return function sorteioInterno (){
        console.log(`o numero sorteado foi ${numeroSecreto} `)
    }
}

const f = sorteio()

f()