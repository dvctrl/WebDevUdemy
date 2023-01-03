/* 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo). */

function qualTipoTriangular(lado1, lado2, lado3) {
  if (lado1 == lado2 == lado3) {
    console.log(
      `as medidas do triangulo são: ${lado1}cm, ${lado2}cm, ${lado3}cm\nPortanto é um triangulo equilatero`
    );
  } else if (lado1 != (lado2 && lado3)) {
    console.log(
      `as medidas do triangulo são: ${lado1}cm, ${lado2}cm, ${lado3}cm\nPortanto é um triangulo escaleno`
    );
  } else if (lado1 == lado2 || lado3) {
    console.log(
      `as medidas do triangulo são: ${lado1}cm, ${lado2}cm, ${lado3}cm\nPortanto é um triangulo Isóceles`
    );
  }

  console.log("----------------");
}

qualTipoTriangular(1, 1, 1);
qualTipoTriangular(2, 21, 31);
qualTipoTriangular(2, 6, 6);