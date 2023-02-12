const { Observable, noop } = require('rxjs');

function entre(min, max) {
  if (min > max) [min, max] = [max, min];

  return new Observable(subscriber => {
  
    // for(let i = min; i <= max; i++) {
    //   subscriber.next(i);
    // } 

    Array(max - min).fill().map((_, i) => {
      subscriber.next(min + i);
    });

    subscriber.complete();
  });

}

entre(1, 10).subscribe({
  next: (v) => console.log(v),
  noop,
  complete: () => console.info('complete') 
})