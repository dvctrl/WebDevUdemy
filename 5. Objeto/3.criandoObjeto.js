// USANDO A CONOTAÇÃO LITERAL 

const obj1 = {} //criação literal utiliza conchetes
console.log(obj1)

// Object em JS

console.log(typeof Object, typeof new Object)

const obj2 = new Object

// funções construtoras

function Produto (preco, desc, nome){
	this.nome = nome 
	this.getPrecoComDesconto = () => {
		return preco * (1 - desc)
	}
}

const p1 = new Produto ('caneta', 7.99, 0.15)
const p2 = new Produto ('Notebook', 2997.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// funcao factory

function criarFuncionario (nome, salarioBase, faltas){
    return {
        nome, 
        salarioBase, 
        faltas, 
        getSalario() {
            return(salarioBase / 30)* (30 - faltas);
        }
    }
}

const f1 = criarFuncionario('Joao', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

// object.crate

const filha = Object.create(null)
filha.nome = 'ana'
console.log(filha)

// uma funcao que retorna um objeto para
const fromJSON = JSON.parse ('{"info": "sou um JSON"}')
console.log(fromJSON.info)