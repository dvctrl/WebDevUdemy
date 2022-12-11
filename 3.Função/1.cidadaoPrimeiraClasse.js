/* Função em JS - First Class Citizen  
ou Higher-order Function.

Função é trato como um dado. Logo, pode-se passar como valores, 
passá-los como argumentos e retornar uma função de outra função.
*/

/* Declaração Literal */
function fun1() {
  /* statement */
}

/* Armazenando em uma variavel */
const fun2 = function () {
  /* statement */
};

/* Funções dentro de um array */
const arr = [
  function (a, b) {
    return a + b;
  },
  fun1,
  fun2,
];
console.log(arr[0](2, 3));

/* Armazenar em um atributo de objeto */
const obj = {};
obj.falar = function () {
  return "opa!";
};

console.log(obj.falar());
/* Funções como parametros */
function run(fun) {
  fun();
}
run(function () {
  console.log("executando....");
});

/* Uma função pode retornar/conter uma outra função */
function soma(a, b) {
  return function (c) {
    console.log(a + b + c);
  };
}
soma(2, 3)(3);
/* Podemos utilizar os valores de nossas 
função em uma variavel que o resultado sera o mesmo */
let cincoMais = soma(2, 3);
cincoMais(3);
