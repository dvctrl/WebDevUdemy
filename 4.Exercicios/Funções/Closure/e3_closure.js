const nomecompleto = () => {
    const nome = 'David Santos Mouzinho da Silva'

    const formataNome = () => {
        const nomes = nome.split(" ")
        return nomes[0]+" " + nomes[nomes.length -1] 
    }
    return formataNome
}

const minhaClosure = nomecompleto()

console.log(minhaClosure())