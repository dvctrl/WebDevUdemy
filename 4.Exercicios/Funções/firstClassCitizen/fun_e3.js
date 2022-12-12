/* Exercicios para First Class Citizen */

let funcao = function (){
  console.log("primeira parte da funcao")
  return function (){
    console.log("agora a segunda parte!! ola mundo!")
  }
}

funcao()()

