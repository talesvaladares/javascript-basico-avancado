const fs = require('node:fs');
const path = require('node:path');

function lerDiretorio(caminho) {

  return new Promise((resolve, reject) => {

    try {
      const arquivos = fs.readdirSync(caminho); //le os arquivos em uma pasta
      const arquivosCompletos = arquivos.map(arquivo => path.join(caminho, arquivo))
      return resolve(arquivosCompletos)
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

function elementosTerminadosCom(padraoTextual, array) {
  //filtra os elementos que terminam com o padrão que for passado
  return array.filter(el => el.endsWith(padraoTextual))
}

function removerSeIncluir(padraoTextual) {
  return function(array) {
    return array.filter(el =>  !el.includes(padraoTextual))
  }
}

function removerSeVazio(array) {
  return array.filter(el => el.trim())
}

function removerSeApenasNumero(array) {
  return array.filter(el => {
    const num = parseInt(el.trim());
    return num !== num;
  })
}

function removerSimbolos(simbolos) {
  return function(array) {
    return array.map(el => {
      return simbolos.reduce((acumulador, simbolo) => {
        return acumulador.split(simbolo).join('')
      }, el)
    })
  }
}

function mesclarElementos(array) { 
  return array.join(' ')
};

function separarTextoPor(simbolo) {
  return function(texto) {
    return texto.split(simbolo)
  }
}

function agruparElementos(palavras) {
  
  return Object.values(palavras.reduce((acumulador, palavra) => {
    const el = palavra.toLowerCase();
    const qtde = acumulador[el] ? acumulador[el].qtde + 1 : 1;
    acumulador[el] = {elemento: el, qtde}
    return acumulador;    

  }, {}))
}

function ordernarPorAtributoNumerico(attr, ordem = 'asc') {
  return function(array) {
    const asc = (o1, o2) => o1[attr] - o2[attr];
    const desc = (o1, o2) => o2[attr] - o1[attr];
    return array.sort(ordem === 'asc'? asc : desc);
  }  
}


module.exports = {
  lerDiretorio,
  lerArquivos,
  lerArquivo,
  elementosTerminadosCom,
  removerSeVazio,
  removerSeIncluir,
  removerSeApenasNumero,
  removerSimbolos,
  mesclarElementos,
  separarTextoPor,
  agruparElementos,
  ordernarPorAtributoNumerico
}