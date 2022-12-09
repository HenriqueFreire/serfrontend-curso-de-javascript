
    const array = [1, 3, 4, 1, 4, 5, 3, 5, 8, 9]
    
    const numerosUnicos = array.reduce(function(numerosUnicos, numeroAtual){
      if (numerosUnicos.indexOf(numeroAtual) === -1) {
        numerosUnicos.push(numeroAtual)
      }
      return numerosUnicos  
    }, [])

    console.log(numerosUnicos)
