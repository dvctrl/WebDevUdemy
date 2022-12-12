/* exercicio de parametro variavel */

function colocarItem() {
  let sacola = '';
  for (i in arguments) {
    sacola += arguments[i];
  }
  return sacola;
}

console.log(colocarItem(' melancia'));
console.log(colocarItem(' melancia', ' uva', ' pera', ' limão'));
console.log(colocarItem(' pasta de dente'));
