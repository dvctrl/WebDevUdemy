let pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //conflito de paradigma 

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()