class Lancamento {
  constructor(nome = "Genérico", valor = 0) {
    this.nome = nome
    this.valor = valor
  }
}

class CicloFinanceiro {
  constructor(mes, ano) {
    this.mes = mes
    this.ano = ano
    this.Lancamentos = []
  }

  addLancamento(...lancamentos) {
    lancamentos.forEach((l) => this.Lancamentos.push(l))
  }

  sumario() {
    let valorConsolidado = 0
    this.Lancamentos.forEach((l) => {
      valorConsolidado += l.valor
    })

    return valorConsolidado
  }
}

const salario = new Lancamento("salario", 45000)
const contaDeLuz = new Lancamento("conta de luz", -220)
const contas = new CicloFinanceiro(6, 2018)
contas.addLancamento(salario, contaDeLuz)

console.log(contas.sumario())
