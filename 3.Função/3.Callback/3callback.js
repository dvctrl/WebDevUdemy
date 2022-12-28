// exemplo de callback no browser
//Uma função callback é uma função passada a outra função como argumento, 
//que é então invocado dentro da função externa para completar algum tipo de rotina ou ação.

document.getElementsByTagName('body')[0].onclick = function(e) {
    console.log("o evento ocorreu!")
}