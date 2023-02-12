const { from, asyncScheduler } = require('rxjs');
const { observeOn } = require('rxjs/operators');

//desta forma eu transforma meu codigo de sincrono para assincrono
console.log('inicio')
from([1, 3,4,5,6,7,8,9, 10])
  .pipe(observeOn(asyncScheduler))
  .subscribe(console.log);

console.log('fim')
