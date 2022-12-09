let arr = [4, 5, 10, 20, 35, 10]

console.log(arr.indexOf(10)) // retorna a posição do valor procurado

console.log(arr.lastIndexOf(10)) // o mesmo que o indexOf só que de trás para frente

console.log(arr.includes(10)) // retorna um booleano true se encontrar e false se não achar

console.log(arr.find(function (element) {
  return element > 10
})) // retorna o primeiro valor que retorna a função como true

console.log(arr.findIndex(function (element) {
  return element > 10
})) // retorna a posição do primeiro indice que retorna a função como true

