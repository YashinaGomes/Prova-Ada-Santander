function sortearNumerosCartela() {
    let cartela = [11, 28, 35, 74, 26, 17]
    let numerosSorteados = []
    
    while (cartela.length > 0) {
        let numeroSorteado = Math.floor(Math.random() * 75) + 1
        console.log(`Número sorteado: ${numeroSorteado}`)
        
        if (!numerosSorteados.includes(numeroSorteado)) {
            numerosSorteados.push(numeroSorteado)
        }
        
        cartela.forEach((numero, index) => {
            if (numero === numeroSorteado) {
                console.log(`Número ${numero} encontrado na cartela!`)
                cartela.splice(index, 1)
            }
        })
    }

    console.log("Parabéns, você ganhou!")
}

sortearNumerosCartela()
