function aula(nome, videoID) {
  this.nome = nome
  this.videoID = videoID
}

const aula1 = new aula("bem vindo", 123)
const aula2 = new aula("até breve", 456)

/* operador new cria um novo objeto, o prototipo do objeto aponta para a função - aula.prototype */

console.log(aula1, aula2)

/* SIMULA O OPERADOR NEW */

function novo(f, ...params) {
  const obj = {}
  obj.__proto__ = f.prototype
  f.apply(obj, params)

  return obj
}

const aula3 = novo(aula, "bem vindos", 123)
const aula4 = novo(aula, "até breve", 456)

console.log(aula3, aula4)
