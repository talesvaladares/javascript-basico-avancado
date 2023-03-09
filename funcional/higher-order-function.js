//funções que operam em outras funções
//tornando-as com argumentos ou retornado-as
//são chamadas de higher-order functions

function executar(fn, ...params) {
  return function (textoInicial) {
    return `${textoInicial} ${fn(...params)}`  
  }
}

function somar(a, b, c) {
  return a + b + c
}

function multiplicar(a, b) {
  return a * b
}

console.log(executar(somar, 1, 2, 3)('O Resultado é: '))
console.log(executar(multiplicar, 1, 2)('O Resultado é: '))