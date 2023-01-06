/* podemos declarar um objeto de duas formas */

let user = new Object(); /* Objeto construtor */
let users = {}; /* sintax de objeto literal */

/* Literais e suas propriedades */
/* podemos adiciopnar alguams 
propriedades logo as {....} */

let usuario = {
  nome: "joao",
  idade: 30,
};
/* podemos inserir valores booleanos às propriedades */
usuario.IsAdmin = true;
console.log(usuario);
/* ******************* */

/* Também podemos usar nomes de propriedades com várias palavras: */
let usuario2 = {
  nome: "joao",
  idade: 30,
  "gosta de carrinhos vrum vrum": true,
};
console.log(usuario2);
console.log(usuario2["gosta de carrinhos vrum vrum"]);
delete usuario2["gosta de carrinhos vrum vrum"];
console.log(usuario2);
/* ******************* */
/* PROPRIEDADES COMPUTADAS - podemos inserir objetos entre colchetes */

let fruta = "maca";
let bag = {
  [fruta]: 5,
};
console.log(bag.maca);

/* O significado de uma propriedade computada é simples: [fruta]
significa que o nome da propriedade deve ser obtido de fruta. */

for (key in usuario) {
  console.log(usuario[key]);
}

/* Ordenando valores do objeto */

let codigos = {
  49: "Alemanha",
  41: "Suiça",
  44: "Gra-Bretanha",
  // ..,
  1: "Brazil",
};

for (codigos in codigos) {
    console.log(codigos)
}