function calcularMedia() {
  let totalDosParametros = 0
  for (let i = 0; i < arguments.length; i++) {
    totalDosParametros += arguments[i]    
  }
  if (arguments.length === 0) {
    return 0
  }
  if (isNaN(totalDosParametros)) {
    return "Erro: Todos os parametros precisam ser numéricos"
  }
  return totalDosParametros / arguments.length
}

console.log(calcularMedia())