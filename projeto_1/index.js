const path = require('node:path');
const { 
  lerDiretorio, 
  elementosTerminadosCom,
  lerArquivos, 
  removerSeVazio,
  removerSeIncluir,
  removerSeApenasNumero,
  removerSimbolos,
  mesclarElementos,
  separarTextoPor,
  agruparElementos,
  ordernarPorAtributoNumerico
} = require('./funcoes.js');

const caminho = path.join(__dirname, '..', 'dados', 'legendas');
const simbolos = [
  '.', '?', '-', ',','"','♪', '_', '<i>', '</i>', '\r', '[', ']', '(', ')'
];

lerDiretorio(caminho)
  .then(arquivos => elementosTerminadosCom('.srt', arquivos))
  .then(lerArquivos)
  .then(mesclarElementos)
  .then(separarTextoPor('\n'))
  .then(removerSeVazio)
  .then(removerSeIncluir('-->'))
  .then(removerSeApenasNumero)
  .then(removerSimbolos(simbolos))
  .then(mesclarElementos)
  .then(separarTextoPor(' '))
  .then(removerSeVazio)
  .then(agruparElementos)
  .then(ordernarPorAtributoNumerico('qtde', 'desc'))
  .then(console.log);
