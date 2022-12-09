/* The for...in statement iterates over all enumerable string properties of an object 
(ignoring properties keyed by symbols), including inherited enumerable properties. */

/*  SINTAX */

/* 
    for (variable in object)
        statement 
*/


/* let object = { a: 1, b: 2, c: 3 };

for (let property in object) {
  console.log(`${property}: ${object[property]}`);
} */

const notas = [6,7,8,9,10] 
for (let i in notas){
    console.log(`nota: ${notas[i]}`);
}

let pessoa = {
    nome: 'joao',
    sobrenome:'pedro',
    idade: 22,
    signo: 'sei la não acredito nessas coisas'
}

for (let i in pessoa) {
    console.log(`${i}: ${pessoa[i]}`)
}