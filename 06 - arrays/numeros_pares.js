// Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado

let numeros = [5, 10, 11, 58, 26, 13]

for(let i = 0; i<numeros.length; i++) {
  if(numeros[i] % 2 === 0){
    console.log(numeros[i])
  }
}
