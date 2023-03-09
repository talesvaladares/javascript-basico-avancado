//wrapper são objetos que implementam a função MAP
//que também é um "wrapper" de um valor

const nums = [1, 2, 3 ,4 ,5]

const novosNums = nums
  .map(el => el + 10)
  .map(el => el * 2)
console.log(novosNums)

function tipoSeguro(valor) {
  return {
    valor,
    map(fn) {
      const novoValor = fn(this.valor)
      return tipoSeguro(novoValor)
    },
    flatMap(fn) {
      return this.map(fn).valor
    }
  }
}

const resultado = tipoSeguro('Esse é um texto')
  .map(t => t.toUpperCase())
  .map(t => `${t}!!!`)
  .map(t => t.split('').join(' '))

console.log(resultado.valor)