/**
 * O 'break' funciona somente dentro de um laço 'switch', dentro
 * de um laço 'for' e dentro de um laço 'while'; assim como o
 * 'continue' 
 * 
 *  Mas o ideal é não utiliza-lo, pois desviar o fluxo da sua aplicação
 * constantemente pode deixa-lo lento ou até mesmo mais confuso. 
 * Dentro de um uso 'for', é completamente desencorajado. 
 */

//vai interromper o laço e seguir para a proxima sentença
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 for (x in nums) {
     if (x == 5){
        break//break age sobre o FOR, não IF
     } 
     console.log(`o indice X ${x} é igual o elemento ${nums[x]}`)
 }
//vai enterromper a senteça y == 5 e continuar a proxima repetição
 for (y in nums){
     if (y == 5){
         continue
     }
     console.log(`o indice Y ${y} é igual o elemento ${nums[y]}`)
 }
 
 externo: 
 for(a in nums){//não use esse tipo de estrutura!!!!
     for(b in nums){
         if(a == 2 && b == 4) break externo
         console.log(`Par = ${a}, ${b}`)
     }
 }