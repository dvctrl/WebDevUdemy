/* programaçao funcional */

function Carro(fabricante, modelo, ano, cor){
    return {
        toString(){
            return `${fabricante}, ${modelo}, ${ano}, ${cor}`
        }
    }
}

const aston = new Carro ('aston martin', 'v8 vantage', '2012', 'green')

console.log(aston.toString())