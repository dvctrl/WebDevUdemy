const pessoa = {
  nome: "rebeca",
  idade: 2,
  peso: 13,
};

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));

Object.entries(pessoa).forEach((e) => {
  console.log(`${e[0]}: ${e[1]}`);
});

Object.defineProperty(pessoa, "dataNascimento", {
  enumerable: true,
  value: '01/01/2023',
  writable: false,
});

pessoa.dataNascimento = '01/01/2022';
console.log(pessoa.dataNascimento);


const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a:4}
const obj = Object.assign(dest, o1, o2);

console.log(dest)