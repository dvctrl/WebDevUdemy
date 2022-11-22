const sequencia = {
    _valor: 1, //convensao
    get valor(){return this._valor++},//a vantagem deste metodo é validar algum valor
    set valor(valor){
       if (valor > this._valor) {
            this._valor = valor;
       }
    }
}

console.log(sequencia.valor, sequencia.valor)

sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)