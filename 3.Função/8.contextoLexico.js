const valor = 'global'

function minhaFuncao (){
    console.log(valor)
}

minhaFuncao()

function exec () {
    const valor = 'local'
    minhaFuncao()
}

exec()

