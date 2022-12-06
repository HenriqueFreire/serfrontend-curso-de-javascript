/*
Tipos de dados primitivos

string = texto
number = numeros inteiros e decimais
boolean = verdadeiro ou falso
*/

let numberExample1 = 5.5
let numberExample2 = 5
let stringExample1 = 'texto'
let stringExample2 = "texto"
let stringExample3 = `texto`
let booleanExample1 = true
let booleanExample2 = false

// contatenação

stringExample1 += ' mais ' + numberExample1
stringExample3 += ` mais ${numberExample2}`

console.log(stringExample1)
console.log(stringExample3)

// verificar tipos de dados
console.log(typeof numberExample2)
console.log(typeof stringExample2)
console.log(typeof booleanExample2)
