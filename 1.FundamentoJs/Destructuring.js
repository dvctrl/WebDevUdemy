// novo recurso inserido no ES 2015

const pessoa = { 
    nome:"ana",
    idade: 15,
    endereco: {
        logradouro: "Rua Dos Condenados",
        numero: 69
    }
} 
/* as chaves no exemplo abaixo não simbilam a criação de um objeto
mas sim, o identificador para a destructuring, ou seja, remover
as informações dentro do objeto 'pessoa'. que no caso são os 
atributos nome e idade e pode ser criado novas variaveis*/
const { nome, idade} = pessoa
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n, i)

const {sobrenome,bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

/* Para buscar informações dentro da constante endereço */
/*Note que também é possivel inserir as informações como registrado
no campo CEP */
const {endereco:{logradouro,numero, cep = "04890069"}} = pessoa
console.log(logradouro, numero, cep)

/*Tome cuidado para não tentar buscar informações ou criá-las em 
algo que não é um objeto. e sim algo nulo*/
const{conta: { agencia, codigo} } = pessoa
console.log(agencia,conta)