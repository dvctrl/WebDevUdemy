/* Exercicios para First Class Citizen */

function melancia(){
  return 'melancia'
}

function morango(){
  return 'morango'
}

function feira (fruta1, fruta2){
  console.log(`eu comprei: ${fruta1()}, ${fruta2()}`)
}

feira(morango,melancia)