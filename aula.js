const notas = []

notas.push(5)
notas.push(10)
notas.push(10)


let soma = 0

for(let i=0; i<notas.length; i++) {
  soma = soma + notas[i]
}

let media = soma/notas.length
console.log(media)
