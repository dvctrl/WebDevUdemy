/* O template string ajuda voce a ter um codigo mais dinamico, visualmente mais 
agradavel e é o uso mais recomentado ,vejamos o exemplo a seguir: */

const nome = "David"
const concatenacao = "olá " + nome + "!"
console.log(concatenacao)

/* Perceba que a const acima, deixa o código 'lento', e não há muitas margens
para alteração, quebras de linhas, etc; vamos criar um template que consiga
comportar tudo isso, e desta forma tornar nosso trabalho mais dinamico.   */

const template = `
olá 
${nome}!
`
console.log(template)

/* neste segundo exemplo acima, a nossa váriavel 'template' que ele considerou a quebra
 de linhas, e com a sintaxe ${nome} conseguimos introduzir uma variável sem a necessidade
 de uma concatenacao, tornando o código em si muito mais dinamico.   */

// expressões........

console.log(`1 + 1 = ${1+1}`)

// função de exemplo: 
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)
