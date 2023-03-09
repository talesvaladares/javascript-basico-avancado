const letrasAninhadas = [
  ['o', ['l'], 'a'], 
  [' '], 
  ['m', ['u', ['n']], 'd', 'o']
]

//transforma uma matriz em array
const letras =  letrasAninhadas.flat(Infinity)

const resultado = letras
  .flatMap(l => [l, ','])
  .reduce((a, b) => a + b)

console.log(resultado)