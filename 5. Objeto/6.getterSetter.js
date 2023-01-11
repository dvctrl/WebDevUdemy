const sequencia = {
    _valor: 1, /* por converção, o underline é usado para indicar um objeto privado */
    get valor() { return this._valor++; },
    set valor(valor){
        if(valor > this._valor){
            this._valor = valor;
        }
    }
}

console.log(sequencia.valor, sequencia.valor)