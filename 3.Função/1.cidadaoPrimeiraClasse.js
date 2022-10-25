// Função em JS é First-Class Object (Citizens)
//Higher-Order function

//função é tratado como um dado, e utiliza-lo como parametro
//função pode retornar mais dados, função pode haver outras funções

// criar de forma literal

function fun1(val)/*<- parametros*/ { }/*<- (bloco de código)sentença de código*/
/*definir um valor na função é opcional, 
porém ira retornar undefined caso vc não insira o 
return em sua função */


//armazendando em uma variavel 
 const fun2 = function( ){ }//função anonima e associa a constante
 //ao chamar a const com os () irá chamar a função

 // armazendando em um array
  const array = [function (a, b){return a + b }, fun1, fun2]
  console.log(array[0](2,3))

// armazenar o atributo em um objeto
const obj = {}
obj.falar = function(){return 'opa'}
console.log(obj.falar())

// Passar função como parametro
function run(fun){
fun()
}

run(function(){console.log('executando...')})

//uma função pode retorar/conter uma função

function soma(a,b){
    return function(c){
        console.log(a + b + c)
    }
}
soma(1, 2)(3)
const cincoMais = soma(1, 2)
//ou
cincoMais(3)