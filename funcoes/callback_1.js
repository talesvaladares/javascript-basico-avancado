function exec(fn, a, b) {
  return fn(a, b)
}

function somarNoTerminal(a, b) {
  console.log(a + b)
}

function subtrairNoTerminal(a, b) {
  console.log(a - b)
}

exec(somarNoTerminal, 2, 2);
//exec(subtrairNoTerminal, 56, 38);


function falarOi() {
  console.log('oi')
}

setInterval(falarOi, 1000);