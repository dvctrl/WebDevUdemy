const pessoa = nome => {
    return{
        falar: () => {console.log(`meu nome é ${nome}`)}
    }
}

let pedro = pessoa('pedro')
pedro.falar()
let joao = pessoa('joao')
joao.falar()