//uma função pura é uma função em que o valor
//de retorno é determinado APENAS por seus valores
//de entrada, sem efeitos colaterais observaveis

const Pi = 3.14;

//função impura - Pi é um valor externo
function areaCirculo(raio) {
  return raio * raio * Pi
}

console.log(areaCirculo(10))
console.log(areaCirculo(10))
console.log(areaCirculo(10))

//função pura
function areaCirculoPura(raio, pi) {
  return raio * raio * pi
}