const { Observable, noop } = require('rxjs');

const observable = Observable.create(subscriber => {
  subscriber.next('RXJs')
  subscriber.next('é')
  subscriber.next('bem')
  subscriber.next('poderoso')

  if (Math.random() > 0.5) {
    subscriber.complete();
  }
  else {
    subscriber.error('Que problema');
  }
});

observable.subscribe(
  valor => console.log(valor),
  error => console.log(error),
  () => console.log('fim')
)


observable.subscribe(
  valor => console.log(valor),
  noop, //não faz nada se der erro
  () => console.log('fim')
)

observable.subscribe({
  next(valor) {
    console.log(valor)
  },
  error(erro) {
    console.log(erro)
  },
  complete() {
    console.log('fim')
  }
})