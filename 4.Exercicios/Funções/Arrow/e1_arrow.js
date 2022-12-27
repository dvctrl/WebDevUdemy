let idade = 18

let mostrarIdade = (idade > 17) ?
    () => console.log('já pode ser preso!'):
    () => console.log('ainda é um little baby') ;


mostrarIdade()