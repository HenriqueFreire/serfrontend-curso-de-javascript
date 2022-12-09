let arr = [1,2,3]

arr.push(4)     // Insere valores no final da array
arr.pop()       // Remove o último elemento da array
arr.unshift(0)  // Insere valores no início da array
arr.shift()     // Remove o primeiro elemento da array 

let arr2 = arr.slice(1,2) // retorna uma parte de uma array definindo posição de início e fim 
arr.splice(1,2) // remove uma parte de uma array definindo posição de início e fim