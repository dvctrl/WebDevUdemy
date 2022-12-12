function fala(mensagem) {
  console.log(mensagem);
}
fala();
/* note que o valor default, é undefined */

function falar(mensagem = "olá meu chapa") {
  return console.log(mensagem);
}
falar();

/* O valor padrão do parâmetro message na função say() é a string 'olá mundo'. */

function dizer(mensagem) {
  mensagem =
    typeof mensagem !== "undefined"
      ? mensagem
      : "ih rapaz não declarou nenhum argument para essa função?";
  console.log(mensagem);
}
dizer("olá meus chapas de todo brasil-sil-sil");
dizer();

/* Neste exemplo, não passamos nenhum valor para a função dizer(), portanto o seu valor padrão é undefined. 
Porém dentro da função, atribuímos a string 'ih rapaz[...]' como valor da variável message. */
