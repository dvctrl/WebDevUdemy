Number.prototype.entre = function (inicio, fim) {
  return this >= inicio && this <= fim;
};

const imprimirResultado = function (nota) {
  if (nota.entre(9, 10)) {
    console.log("Quadro de honra");
  } else if (nota.entre(7, 8.99)) {
    console.log("Aprovado");
  } else if (nota.entre(4, 6.99)) {
    console.log("Recuperação");
  } else if (nota.entre(0, 3.99)) {
    console.log("Tu é muito burro, reprovadissímo");
  } else {
    console.log("nota invalida");
  }
  console.log(".........");
};

imprimirResultado(10);
imprimirResultado(4);
imprimirResultado(6.99);
imprimirResultado(7.25);
imprimirResultado(9);
imprimirResultado(-2);
imprimirResultado(-1);
imprimirResultado(12.99);

/* Neste exemplo acima, nota-se que podemos usar o condicional
 * 'if' e 'else if' de forma encadeada gerando diversos testes
 * em nossa programação
 *
 */
