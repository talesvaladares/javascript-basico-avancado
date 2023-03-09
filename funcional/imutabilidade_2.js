const nums = [4, 3, 3, 5, 6, 7];

//#1 - dados mutáveis
// let total = 0;

// for(let i = 0; i < nums.length; i++) {
//   total+= nums[i]
// }

//#2 - reduce
//const somar = (a, b) => a + b
//const total = nums.reduce(somar)

//#3 - recursividade

function somar(array, total = 0)  {
  if(array.length === 0) {
    return somar(array.slice(1), total + array[0])
  }
}