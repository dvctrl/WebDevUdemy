//bloco de codigo em escopo global
{ 
    {
         
        {
            {
                 var sera = "sera?"
                 console.log(sera)
            } 

        } 
     } 
}
console.log(sera)

//função fora do escopo global
function teste() {
    var local = "Santa catarina da Virgem Lucinda"
    console.log(local)
}
// console.log(local) não é possivel gerar essa variavel

// ao criar uma variavel dentro de uma função, o escopo do cód só estara 'visivel' dentro da funcao

teste()

/* Não crie variaveis que estão no escopo global, pois qualquer subsescricao em cima
da sua variavel, pode gerar sequelas na sua aplicação */