const { Observable, Subject} = require('rxjs');

//retorna valores diferentes ara cada inscrito ou interessado
function getObservable() {
  return new Observable(subscriber => {
    setTimeout(() => {
      console.log('#1 Obs...')
      subscriber.next(Math.random())
      subscriber.complete()
    }, 1000)
  })
}

//retorna sempre o mesmo valor para todos os inscritos ou interessados
function getSubject() {
  const sub = new Subject();
  setTimeout(() => {
    console.log('#2 Sub...')
    sub.next(Math.random())
    sub.complete()
  }, 1000)

  return sub;
}

const obs = getObservable();
obs.subscribe(console.log);
obs.subscribe(console.log);

const sub = getSubject();
sub.subscribe(console.log);
sub.subscribe(console.log);