const fs = require('node:fs');
const path = require('node:path');

function lerDiretorio(caminho) {

  return new Promise((resolve, reject) => {

    try {
      const arquivos = fs.readdirSync(caminho); //le os arquivos em uma pasta
      arquivos.map(arquivo => path.join(caminho, arquivo))
  
      return resolve(arquivos.map(arquivo => path.join(caminho, arquivo)))
    }
    catch(error) {
      return reject(error);
    }
  });
}

function lerArquivo(caminho) {
  
  return new Promise((resolve, reject) => {
    try {
      const conteudo = fs.readFileSync(caminho, {encoding: 'utf-8'});
      resolve(conteudo.toString());
    }
    catch(error) {
      reject(error);
    }

  });
}

function lerArquivos(caminhos) {
  return Promise.all(caminhos.map(caminho => lerArquivo(caminho)))
}

function elementosTerminadosCom(array, padraoTextual) {
  //filtra os elementos que terminam com o padrão que for passado
  return array.filter(el => el.endsWith(padraoTextual))
}

function removerSeIncluir(array, padraoTextual) {
  return array.filter(el =>  !el.includes(padraoTextual))
}

function removerSeVazio(array) {
  return array.filter(el => el.trim())
}

module.exports = {
  lerDiretorio,
  lerArquivos,
  lerArquivo,
  elementosTerminadosCom,
  removerSeVazio,
  removerSeIncluir,
}