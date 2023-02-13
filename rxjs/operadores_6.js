const { from, Observable } = require('rxjs');

function createPipeableOperator(operatorFn) {
  return function (source) {
    return new Observable( subscriber => {
      const sub = operatorFn(subscriber)
      source.subscribe({
        next: sub.next,
        error: sub.error || (e => subscriber.error(e)),
        complete: sub.complete || (() => subscriber.complete())
      })
    })
  }
}

function primeiro() {
  return createPipeableOperator( subscriber => ({
    next(v) {
      subscriber.next(v)
      subscriber.complete()
    }
  }))
}


from([1,2,3,4,5])
  .pipe(primeiro())
  .subscribe(console.log)