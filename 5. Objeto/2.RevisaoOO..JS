const produto = new Object

produto.nome = 'cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = '220'

delete produto.preco
delete produto['marca do produto']

const carro = {
	modelo: 'A4', 
	valor: 89000,
	proprietario: {
		nome: 'Raul',
		idade: 56,
		endereco: {
			logradouro: 'RUA ABC',
			numero: 123,
		}
	},
	condutores: [{
		nome:'junior',
		idade: 19 
},{
		nome:'andrézão',
		idade: 222
	}],
	calcularValorSeguro: function(){
//...
}
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'av gigante'

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro

console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)