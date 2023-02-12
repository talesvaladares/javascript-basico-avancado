const { ajax } = require('rxjs/ajax');
const { XMLHttpRequest } = require('xmlhttprequest');
const { interval, from } = require('rxjs');
const { map, concatAll } = require('rxjs/operators');

// interval(1000)
//   .pipe(
//     map(_ => [1, 2, 3]),
//     concatAll() //transforma um array de array em um array
//   )
//   .subscribe(console.log)

try {
  ajax({
    createXHR: () => new XMLHttpRequest(),
    url: "https://api.github.com/users/talesvaladares/repos"
  })
    .pipe(
      map(response => JSON.parse(response.xhr.responseText)),
      concatAll(),
      map(repo => repo.full_name)
    )
    .subscribe(console.log)
}
catch(error) {
  console.log(error)
}