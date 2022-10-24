// par nome/vlaor 
 const saudacao = 'opa' //contexto léxico 1

 /* Contexto léxico, nada mais é do que o local fisico
 de onde o seu código foi escrito */

    function exec(){
        const saudacao = 'faaala' //contexto léxico 2
        return saudacao // contexto léxico 3
    }

// Objetos são grupos aninhados de pares de nome e valor
    const cliente = {
        Nome: 'Pedro',
        idade: 32,
        peso: 90,
        endereco: {
            Logradouro :'Rua antonio carlos',
            Numero: 109,
        } 
    }
    console.log(saudacao)
    console.log(exec())
    console.log(cliente)
