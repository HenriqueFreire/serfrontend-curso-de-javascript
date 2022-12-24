const arr = [1, 5, 10, "ola", true]

let soNumeros = arr.every(function (elemento) { // se um retornar false, every() retorna true
  console.log(elemento)
  return typeof elemento === "number"
})

console.log(soNumeros)

let soNumeros2 = arr.some(function (elemento) { // se um retornar true, some() retorna true
  console.log(elemento)
  return typeof elemento === "number"
})

console.log(soNumeros2)

const arr1 = arr.filter(function (elemento, indice, array) { // retorna uma array de acordo com o retorno da função
  return typeof elemento === "number"
})

console.log(arr1)

arr.forEach(function (elemento, indice, array) { // jeito chique de iterar arrays ao invès de um loop

})

let arr2 = arr1.map(function (elemento) { // map retorna uma array com os retornos da função
  return elemento * elemento
})