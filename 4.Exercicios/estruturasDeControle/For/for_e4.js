let carro = {
    modelo:'Opalão 6 caneco',
    ano: 1970,
    fabricante: 'chevrolet',
    kmRodado:'Muito, acredite, muitos kilometros já foram rodados!'
} 

for (info in carro){
    console.log(`${info}: ${carro[info]}`);
}
