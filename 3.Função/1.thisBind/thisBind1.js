const pessoa = {
    saudacao: 'bom dia!',
    falar(){
        console.log(this.saudacao)//o this chama a função que acabei de criar
    }// sem o this, irá apresentar um erro no meu codigo
}

pessoa.falar()
const falar = pessoa.falar
falar()// conflito entre: funcional e OO
/*
 * O efeito colateral acima, é que ao armazenar a função de
 * falar, o this não esta mais sendo apontado para essa const,
 * logo, o resultado sera undefined
 */

const falarDePessoa = pessoa.falar.bind(pessoa);
/**
 * O Bind é responsavel por chamar um objeto this, para
 * resolver o colateral do seu código.
 * Acima, temos o bind chamando o this que esta associado 
 * ao objeto pessoa, e logo, o resultado será correto
 */

falarDePessoa()