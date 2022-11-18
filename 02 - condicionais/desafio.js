/* 
    Faça um programa para calcular o valor de uma viagem

    Você terá 3 variáveis, sendo elas:
    1- Preço do etanol;
    2 - Preço da gasolina;
    3 - O tipo de combustivel que está no seu carro;
    4 - Gasto médio de combustível do carro por KM;
    5 - Distância em KM da viagem;

    Imprima no console o valor que será gasto para a viagem
*/

let precoEtanol = 3.70
let precoGasolina = 5.79
let tipoCombustivel = 'etanol'
let gastoMedioPorKM = 1
let distanciaEmKM = 10
let gastoViagem = 0

let litrosConsumidos = distanciaEmKM / gastoMedioPorKM


if(tipoCombustivel === 'gasolina') {
    gastoViagem = litrosConsumidos * precoGasolina
    console.log("Valor da viagem utilizando gasolina R$: ", gastoViagem)
} else if (tipoCombustivel === 'etanol') {
    gastoViagem = litrosConsumidos * precoEtanol
    console.log("Valor da viagem utilizando Etanol R$: ", gastoViagem)
} else {
    console.log("Tipo de combustível inválido")
}