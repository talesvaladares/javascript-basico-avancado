function gerarNumero() {

  return {
    iniciar(fn, intervalo = 1000) {
      let numero = 0;

      const i = setInterval(() => {
        fn(numero++)
      },intervalo)

      return {
        parar() {
          clearInterval(i);
        }
      }
    }
  }
}

const temp1 = gerarNumero();

const exec1 = temp1.iniciar(numero => {
  console.log(`#1: ${numero * 2}`)
}, 1000);

const temp2 = gerarNumero();

const exec2 = temp2.iniciar(numero => {
  console.log(`#2: ${numero + 100}`)
}, 2000);

setTimeout(() => {
  exec1.parar();
  exec2.parar();
},10000)
