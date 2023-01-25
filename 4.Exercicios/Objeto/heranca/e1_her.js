var pessoa = {
  nome: ["Jonh", "Mey"],
  /* nome: {
    primeiro: 'Jonh',
    segundo: 'Mey',
  }, */
  Idade: 34,
  interesses: ["Baralho", "Esquiar"],
  bio() {
    console.log(
      `${this.nome[0]} ${this.nome[1]} tem ${this.Idade} anos de idade. ele gosta de ${this.interesses[0]} e ${this.interesses[1]}.`
    )
  },
  saudacao() {
    console.log(`oi, eu sou ${this.nome[0]} ${this.nome[1]}`)
  },
}

console.log(pessoa.nome)
console.log(pessoa.nome[0])
console.log(pessoa.Idade)
console.log(pessoa.interesses[1])
pessoa.bio()
pessoa.saudacao()

pessoa.olhos = "castanho"
pessoa.Idade = 43

console.log(pessoa)
