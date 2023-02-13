const { from, Observable } = require('rxjs');

next()

function createPipleOperator(next, error, complete) {
  return function (source) {
    
    return new Observable({
      
      source.subscribe({
        next(item),
        error(error),
        complete()
      })
    })
  }
}

function primeiro() {
  return function(source) {
    return Observable.create(subscriber => {
      source.subscribe({
        next(v) {
          subscriber.next(v)
          subscriber.complete()
        }
      })
    })
  }
}


from([1,2,3,4,5])
  .pipe(ultimo())
  .subscribe(console.log)