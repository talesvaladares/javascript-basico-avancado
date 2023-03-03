let p = new Promise(function(resolve)  {
  resolve(['Ana', 'Bia', 'Carlos'])
});

p
  .then(valor => valor[0])
  .then(valor => valor[0])
  .then(valor => console.log(valor));

//esse executa primeiro do que o then de cima
console.log(1);
