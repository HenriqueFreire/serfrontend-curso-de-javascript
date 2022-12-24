function sum() {
  const numbers = [...arguments]
  return numbers.reduce(function(soma, atual ) {
      return soma + atual 
  }, 0)
}

function average() {
  const somaTotal = sum(...arguments)
  return somaTotal / arguments.length
}

console.log(average(5, 5, 6, 7, 3, 9))