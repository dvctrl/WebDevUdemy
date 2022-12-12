/* a estrutura convencional de declaração de um if  */

let ecma = 2015;

if (ecma == 2015) {
  console.log("isso ai!");
} else {
  console.log("burrão!");
}

/* declaracao de forma encurtada que causará o mesmo resultado */

let resultado = ecma == 2015 ? "isso ai ":"voce errou" 
console.log(resultado)

/*  ********* */
idade = 18
let condicao = (idade > 18) ? 'voce ja pode ser preso' : 'ainda é um pequeno macebo'
console.log(condicao)

let age = 2000
let message = (age < 3) ? 'Olá ao mundo!' :
  (age < 18) ? 'ja pode ser preso!' :
  (age < 100) ? 'Matusalem!' :
  'que porra de idade é essa meu amigo!';

console.log(message)