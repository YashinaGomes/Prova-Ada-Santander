function verificarAprovacao(nome, nota) {
    let resultados = []

    if (nome.length === 0) {
        console.log('Nome não pode estar vazio.')
        return
    }

    let notaNumerica = Number(nota)

    if (notaNumerica !== notaNumerica) {
        console.log('Nota inválida. Por favor, insira um número.')
        return
    }

    resultados.push({ nome, nota: notaNumerica })

    resultados.forEach(function(aluno) {
        if (aluno.nota >= 8) {
            console.log(`Parabéns ${aluno.nome}, você foi aprovado!`)
        } else {
            console.log(`Olá ${aluno.nome}! Infelizmente você foi reprovado.`)
        }
    })
}

verificarAprovacao('João', 9)
verificarAprovacao('Maria', 7)
verificarAprovacao('', 8)
verificarAprovacao('Pedro', 'nota')
