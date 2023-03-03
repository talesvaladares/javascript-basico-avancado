function gerarNumerosEntre(min, max) {
  if (min > max) {
    [max, min] = [min, max]
  }

  return new Promise(resolve => {
    const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
    resolve(aleatorio)
  })
}

gerarNumerosEntre(10, 20).then(console.log)
console.log('fim')