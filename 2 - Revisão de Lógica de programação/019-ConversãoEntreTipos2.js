let n1 = 10
let n2 = '2'

let n3 = n1 * n2 // exemplo conversão implicita de n2 para number para esta operação
console.log(n3, typeof n1, typeof n2)

n3 = n1 + n2     // exemplo conversão implicita de n1 para nstring para esta concatenação
console.log(n3, typeof n1, typeof n2)

/*  converter para numero 
    parseInt para numeros inteiros
    parseFloat para numeros decimais
    number() se o primeiro caractere for um numero
*/

// converter para string

n1 = n1 + ''
console.log(typeof n1)

n1 = 1
n1 = n1.toString()
console.log(n1, typeof n1)

n1 = 15
n1 = n1.toString(16) // base hexadecimal
console.log(n1, typeof n1)

n1 = 14
n1 = n1.toString(2) // base binária
console.log(n1, typeof n1)