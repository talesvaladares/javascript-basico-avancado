//função pura e imutavel
function ordenar(array) {
  return [...array].sort();
}

const nums = [3,1,7,9,4,6];
console.log(nums)
console.log(ordenar(nums));