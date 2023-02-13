const { of , Observable } = require('rxjs');

function terminadorCom(parteFinal) {
  return function (source) {
    return new Observable(subscriber => {
      
      source.subscribe({
        next(texto) {
          if (texto.endsWith(parteFinal)) {
            subscriber.next(texto);
          }
        },
        error(e) {
          subscriber.error(e);
        },
        complete() {
          subscriber.complete();
        }
      })     
    })
  }
}

of('ana silva', 'maria silva', 'pedro rocha')
  .pipe(terminadorCom('silva'))
  .subscribe(console.log)


