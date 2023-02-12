//os dois tipos...
//1 operador de criação
//2 operador encadeável

//1 operador criação
const { from ,of } = require('rxjs');

//2 operador encadeavel
const { last, first, map } = require('rxjs/operators');

of(1, 2, 'ana', false, 'ultimo')
  .pipe(
    last(),
    map(v => v[0]),
    map(v => `A letra encontrada foi ${v}`)
  )
  .subscribe(function(valor)  {
    console.log(`O valor gerado foi ${valor}`)
  });

//usado para arrays
from([1, 2, 'ana', false, 'ultimo'])
  .pipe(
    last(),
    map(v => v[0]),
    map(v => `A letra encontrada foi ${v}`)
  )
  .subscribe(function(valor)  {
    console.log(`O valor gerado foi ${valor}`)
  });