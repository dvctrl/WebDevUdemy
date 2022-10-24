function tratarErroeLancar(erro){
    //throw new Error ('erro desconhecido cód 20005, entrar em contato com o suporte')
    //throw 10
    //throw 'deu ruim'
    throw{
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}
function imprimirNome(obj){
    try{
    console.log (obj.name.toUpperCase ( )+ '!!!')
    } catch (e) {
            tratarErroeLancar(e)
    }finally{
        console.log('final')
    }
}
const obj = {nome: 'Roberto'}
imprimirNome(obj)