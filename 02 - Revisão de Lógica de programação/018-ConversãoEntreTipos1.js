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