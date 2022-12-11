function area(largura, altura) {
  let area = largura * altura;
  if (area > 20) {
    console.log(`valor acima do permitido ${area}m²`)
  } else {
    return `metros totais ${area}m²`
  }
}

area(20,10)
area(20,5)
area(1,5)
console.log(area(2))
console.log(area(2,3))
area(2,3)
area(5,5)
