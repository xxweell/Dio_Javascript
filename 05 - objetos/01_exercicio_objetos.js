/* 
    1 - Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilometro rodado.
    Crie um método que dada a quantidade de quilômetros e o preço do combustivel nos dê o valor
    gasto em reais para realizar este percurso;
*/

class Carro {
    marca;
    cor;
    gastoMedioCombustivelPorKmRodado;

    constructor(marca, cor, gastoMedioCombustivelPorKmRodado){
        this.marca = marca
        this.cor = cor
        this.gastoMedioCombustivelPorKmRodado = gastoMedioCombustivelPorKmRodado
    }

    calcularGastoDePercurso(qtdadeKm, preco) {
        return qtdadeKm * this.gastoMedioCombustivelPorKmRodado * preco
    }
}

const uno = new Carro("Fiat", "Preta", 1/12)
const gastoEmReaisUno = uno.calcularGastoDePercurso(70, 5)
console.log(gastoEmReaisUno)

const palio = new Carro('Fiat', 'Branco', 1/10)
const gastoEmReaisPalio = palio.calcularGastoDePercurso(70, 5)
console.log(gastoEmReaisPalio)


