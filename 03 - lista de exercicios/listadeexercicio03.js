/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adquado.

Código condição de pagamento:
    1 - À vista Débito, recebe 10% de desconto;
    2 - À vista no Dinheiro ou Pix, recebe 15% de desconto;
    3 - Em duas vezes, preço normal de etiqueta sem juros;
    4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%
*/

let precoProduto = 100
let condicaoDePagamento = 1

let pagamentoPorDebito = precoProduto - precoProduto * (10/100)
let pagamentoPorDinheiroOuPix = precoProduto - precoProduto * (15/100)
let pagamentoAteDuasVezes = precoProduto
let pagamentoEmMaisDeDuasVezes = precoProduto + precoProduto * (10/100)

console.log("Preço do Produto R$: ", precoProduto)

if(condicaoDePagamento === 1) {
    console.log("Nesta condição o produto sairá no valor de R$: ", pagamentoPorDebito)
} else if (condicaoDePagamento === 2) {
    console.log("Nesta condição o produto sairá no valor de R$: ", pagamentoPorDinheiroOuPix)
} else if (condicaoDePagamento === 3) {
    console.log("Nesta condição o produto sairá no valor de R$: ", pagamentoAteDuasVezes)
} else if(condicaoDePagamento === 4){
    console.log("Nesta condição o produto sairá no valor de R$: ", pagamentoEmMaisDeDuasVezes)
} else {
    console.log("Condição de Pagamento Inválida")
}