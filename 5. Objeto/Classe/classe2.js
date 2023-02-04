class avo {
  constructor(sobrenome) {
    this.sobrenome = sobrenome
  }
}

class Pai extends avo {
  constructor(sobrenome, profissao = "professor") {
    super(sobrenome)
    this.profissao = profissao
  }
}

class Filho extends Pai {
  constructor() {
    super("silva")
  }
}

const filho = new Filho()
console.log(filho)
