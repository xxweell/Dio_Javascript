

// const funcoes = require('./funcoes-auxiliares') // o require importa o que está sendo exportado de outro arquivo ( no caso do arquivo funcoes-auxiliares )

const {gets, print} = require('./funcoes-auxiliares') // desestruturando o objeto e pegando os métodos gets e print

/*
    Uma sala contém 05 alunos e para cada aluno foi sorteado um número de 1 - 100.
    Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado.

    Dados de entrada:
    5
    50
    10
    98
    23

    Saída:
    98
*/

const quantidadeDeAlunos = gets()
let maiorValorEncontrado = 0

for (let i = 0; i < quantidadeDeAlunos; i++) { // laço para popular o array 
    const numeroSorteado = gets()
    if(numeroSorteado > maiorValorEncontrado) {
        maiorValorEncontrado = numeroSorteado
    }
    
}


print(maiorValorEncontrado)
