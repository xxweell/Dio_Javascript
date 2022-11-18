/* 
    2) Crie uma clase para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor de seu IMC ( IMC = peso / (altura * altura));
    Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor seu IMC.
*/

class Pessoa {
    nome
    peso
    altura

    constructor(nome, peso, altura) {
        this.nome = nome
        this.peso = peso
        this.altura = altura
    }

    dizerValorImc() {
        return this.peso / Math.pow(this.altura, 2)
        // return `Olá! Meu nome é ${this.nome} e o meu IMC é ${imc.toFixed(2)}.`
    }
    
    classificarImc(imc) {
        if(imc < 18.5) {
            return "Abaixo do peso"
        } else if(imc >= 18.5 && imc <= 25) {
            return "Peso normal"
        } else if(imc >= 25 && imc <= 30) {
            return "Acima do peso"
        }
        else if(imc >= 30 && imc <= 40) {
                return "Obeso"
        } else {
           return "Obesidade grave"
        }
    }
}

const jose = new Pessoa('José', 70, 1.75)
const valorImc = jose.dizerValorImc()
console.log(`Olá! Meu nome é ${jose.nome} e meu IMC é `, valorImc)

console.log(jose.classificarImc(valorImc))

// const renan = new Pessoa('Renan', 63, 1.75)
// console.log(renan.dizerValorImc())