

// const funcoes = require('./funcoes-auxiliares') // o require importa o que está sendo exportado de outro arquivo ( no caso do arquivo funcoes-auxiliares )

const {gets, print} = require('./funcoes-auxiliares') // desestruturando o objeto e pegando os métodos gets e print

print(gets())