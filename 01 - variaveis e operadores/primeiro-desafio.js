/* Faça um programa para calcular o valor de uma viagem

Você criará 3 variáveis:
1 - Preço do combustível;
2 - Gasto médio de combustível pelo carro por KM
3 - Distância da viagem em KM

*/

let precoCombustivel = 5.79
let kmPorLitro = 1
let distanciaEmKM = 100

let litrosConsumidos = distanciaEmKM / kmPorLitro
let gasto = litrosConsumidos * precoCombustivel

console.log("Gasto da viagem R$: ", gasto.toFixed(2))
