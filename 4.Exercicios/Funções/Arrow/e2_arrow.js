let frutaEscolhida = 'morango'

let cesta = (frutaEscolhida == 'maracuja')  ?
    () => 'maracuja é bão demaaais, boa escolha' :
    () => 'hmm melhor escolher outra!';

console.log(cesta())