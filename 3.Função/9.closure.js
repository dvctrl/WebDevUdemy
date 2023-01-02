// closure é o escopo criado quando uma função é declarada 
//esse escopo permite a função acessar e manipular variáveis externas à função

// contexto lexico em ação 

const x = 'global'

function fora(){
    const x = 'local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()

console.log(minhaFuncao())