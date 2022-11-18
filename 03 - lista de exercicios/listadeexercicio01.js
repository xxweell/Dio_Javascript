/**
 Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima sua média
 e sua classificação conforme a tabela abaixo.

 Média = (nota1 + nota2 + nota3) / 3

 Classificação:
  - Média menor que 5, reprovação;
  - Média entre 5 e 7, recuperação;
  - Média acima de 7, passou de semestre
*/

let nota1 = 0
let nota2 = 0
let nota3 = -1

let media = (nota1+nota2+nota3) / 3

if (media >=0 && media < 5) {
    console.log("Sua média foi: " + media.toFixed(2) + " portanto você está REPROVADO!")
} else if (media >=5 && media<=7) {
    console.log("Sua média foi: " + media.toFixed(2) + " portanto você está de RECUPERAÇÃO!")
} else if (media >7) {
    console.log("Sua média foi: " + media.toFixed(2) + " portanto você está APROVADO!")
} else {
    console.log("Nota Inválida!")
}