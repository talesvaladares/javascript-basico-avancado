const { Observable } = require('rxjs');

const promise = new Promise(resolve => {
  resolve('Promise é bem legal!');
});

promise.then(console.log);

const observable = new Observable(subscriber => {
  //next é o que será retornado para quem se inscrever no observer
  //posso ter quantos next eu quiser
  subscriber.next('Observer')
  subscriber.next('é')
  subscriber.next('bem')
  setTimeout(() => {
    subscriber.next('legal!')
    subscriber.complete();

  },100)
});

observable.subscribe(console.log)