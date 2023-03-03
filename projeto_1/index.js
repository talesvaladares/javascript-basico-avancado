const path = require('node:path');
const { 
  lerDiretorio, 
  elementosTerminadosCom,
  lerArquivos, 
  removerSeVazio,
  removerSeIncluir
} = require('./funcoes.js');

const caminho = path.join(__dirname, '..', 'dados', 'legendas');

lerDiretorio(caminho)
  .then(arquivos => elementosTerminadosCom(arquivos, '.srt'))
  .then(arquivosSRT => lerArquivos(arquivosSRT))
  .then(conteudos => conteudos.join('\n'))
  .then(todoConteudo => todoConteudo.split('\n'))
  .then(linhas => removerSeVazio(linhas))
  .then(linhas => removerSeIncluir(linhas, '-->'))
  .then(console.log);
