/* Ao passar métodos de objeto como retornos de chamada, 
por exemplo, para setTimeout, há um problema conhecido: "perda this". */

/* let usuario = {
  firstName: "Jonas",
  falar() {
    console.log(`olá, ${this.firstName}!`);
  },
};

setTimeout(usuario.falar, 1000); */

/* ______ 3 POSSIVEIS FORMAS PARA RESOLVER ESTE PROBLEMA  */
let usuario = {
  firstName: "Jonas",
  falar() {
    console.log(`olá, ${this.firstName}!`);
  },
};

setTimeout(function () {
  usuario.falar();
}, 1000);

/* Agora funciona, pois recebe user do ambiente lexical externo, e depois chama o método normalmente.*/
