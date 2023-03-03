function gerarNumerosEntre(min, max, tempo) {
  if (min > max) {
    [max, min] = [min, max]
  }

  return new Promise(resolve => {
    const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
    setTimeout(() => {
      resolve(aleatorio)
    },tempo)
  })
}

function gerarVariosNumeros() {
  return Promise.all([
    gerarNumerosEntre(1, 60, 1000),
    gerarNumerosEntre(1, 60, 2000),
    gerarNumerosEntre(1, 60, 100)
  ])
}

gerarVariosNumeros().then(console.log)
