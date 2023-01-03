//IIFE -> Immediately invoke Function Expression 
(function (){
    console.log('será executado na hora')
    console.log('saindo do escopo global')
})()

var result = (function (){
    var nome = console.log('david')
    return nome
})()

result