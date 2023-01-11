/* 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
*/

let jurosSimples = (capital, taxaDeJuros, tempo) => {
  return (juros = `a taxa de juros simples que você ira receber é de: ${(
    capital *
    taxaDeJuros *
    tempo
  ).toLocaleString("pt-br", { style: "currency", currency: "BRL" })}`);
};

console.log(jurosSimples(1200, 0.02, 15));

let jurosCompostos = (capital, taxaDeJuros, tempo) => {
  let juros = capital * ((1 + taxaDeJuros) ** tempo)
  let montante = capital + juros

  return (`O total acumulado num espaço de ${tempo} meses, com taxa de juros de ${taxaDeJuros.toLocaleString("pt-br",{style:"percent"})}, será de: \n${montante.toLocaleString("pt-br",{style:"currency", currency:"BRL"})}`)
};

console.log(jurosCompostos(1200, 0.02, 14));
console.log(jurosCompostos(1200, 0.04, 14));
