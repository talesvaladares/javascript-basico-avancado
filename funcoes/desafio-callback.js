const fs = require('node:fs');
const path = require('node:path');

const caminho = path.join(__dirname, '..', 'dados.txt');

function lerArquivo(path) {
  return new Promise(resolve => {
    fs.readFile(path, (_, conteudo) => {
      resolve(conteudo.toString());
    });
  })
}

lerArquivo(caminho).then(console.log)
