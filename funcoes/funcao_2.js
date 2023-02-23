function executarQualquerCoisa(fn) {
  if (typeof fn === 'function') fn()
}

function bomDia() {
  console.log('Bom dia!');
}

function boaTarde() {
  console.log('Bom tarde!');
}

//executarQualquerCoisa(bomDia)


function calcular(x) {
  return function (y) {
    return function (fn) {
      return fn(x, y)
    }
  }
}

function subtrair(a, b) {
  return a - b;
}

function somar(a, b) {
  return a - b;
}

const result =  calcular(6)(4)(subtrair);
console.log(result);
