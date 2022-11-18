class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) { // o construtor define as regras para que o objeto seja instanciado. É um tipo de contrato. Pra se instanciar um objeto da classe Pessoa, será obrigatório informar o nome e a idade
        this.nome = nome // o this referencia a classe atual, portanto o atributo nome irá receber o valor que for passado pelo parâmetro nome
        this.idade = idade
        this.anoDeNascimento = 2022 - idade
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}.`)
    }
}

function compararPessoas(p1, p2) {
    if(p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho que ${p2.nome}`)
    } else if(p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho que ${p1.nome}`)
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`)
    }
}

const well = new Pessoa('Wellington', 29) // instanciação do objeto
const renan = new Pessoa('Renan', 30) // instanciação do objeto

compararPessoas(well, renan)
