const fs = require('node:fs');
const path = require('node:path');

const caminho = path.join(__dirname, '..', 'dados.txt');

function exibirConteudo(_, conteudo) {
  console.log(conteudo.toString())
}

console.log('inicio')
fs.readFile(caminho, {}, exibirConteudo);
console.log('fim')

console.log('inicio sync')
const conteudo =  fs.readFileSync(caminho)
console.log(conteudo.toString())
console.log('fim sync')