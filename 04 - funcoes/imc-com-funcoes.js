
function calcularImc(peso, altura) {
    return peso / Math.pow(altura,2)
}

function classificarImc(imc) {
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

// Main
(function () {
    let peso = 75
    const altura = 1.69
    
    let imc = calcularImc(peso, altura)
    
    console.log(classificarImc(imc))
})() // função imediatamente executada. Ela só existe dentro dos () e é imediatamente executada após a sua declaração devido aos () no final



