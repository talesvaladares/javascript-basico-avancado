function composicao(...fns) {
  return function(valor) {
    return fns.reduce((acc, fn) => {
      return fn(acc)
    },valor)
  }
}

function gritar(texto) {
  return texto.toUpperCase();
}

function enfatizar(texto) {
  return `${texto.toUpperCase()}!!`;
}

function tornarLento(texto) {
  return texto.split('').join(' ');
}

const exagerado = composicao(gritar, enfatizar, tornarLento);
const resultado = exagerado('para');
const resultado2 = exagerado('cuidado com o buraco');

console.log(resultado)
console.log(resultado2)