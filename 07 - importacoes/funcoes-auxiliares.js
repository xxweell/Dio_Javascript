

function gets() {
    return 10;
}

function print(text) {
    console.log(text)
}

module.exports = { gets, print } // objeto literal que faz a exportação das funções do arquivo 

// module.exports.gets = gets -> outra forma de exportar