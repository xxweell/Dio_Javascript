/*
 Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adquado.

Código condição de pagamento:
    1 - À vista Débito, recebe 10% de desconto;
    2 - À vista no Dinheiro ou Pix, recebe 15% de desconto;
    3 - Em duas vezes, preço normal de etiqueta sem juros;
    4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%
*/

function aplicarDesconto(precoProduto, desconto) {
    return precoProduto - (precoProduto * (desconto/100))
}

function aplicarJuros(precoProduto, taxaJuros) {
    return precoProduto + (precoProduto * (taxaJuros/100))
}

let precoProduto = 100
let condicaoDePagamento = 4

console.log("Preço do Produto R$: ", precoProduto)

if(condicaoDePagamento === 1) {
    console.log("Nesta condição o produto sairá no valor de R$: ", aplicarDesconto(precoProduto, 10))
} else if (condicaoDePagamento === 2) {
    console.log("Nesta condição o produto sairá no valor de R$: ", aplicarDesconto(precoProduto, 15))
} else if (condicaoDePagamento === 3) {
    console.log("Nesta condição o produto sairá no valor de R$: ", precoProduto)
} else if(condicaoDePagamento === 4){
    console.log("Nesta condição o produto sairá no valor de R$: ", aplicarJuros(precoProduto, 10))
} else {
    console.log("Condição de Pagamento Inválida")
}