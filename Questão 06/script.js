const alunos = [
    { nome: 'Pedro', turma: 'A', idade: 14 },
    { nome: 'Maria', turma: 'A', idade: 12 },
    { nome: 'Marcos', turma: 'B', idade: 15 },
    { nome: 'Michel', turma: 'A', idade: 13 },
    { nome: 'Ana', turma: 'B', idade: 11 },
    { nome: 'Bruno', turma: 'B', idade: 10 }
]

function alunoMaisVelhoTurmaA(alunos) {
    let alunoMaisVelho = { idade: 0 }
    for (let i = 0; i < alunos.length; i++) {
        if (alunos[i].turma === 'A' && alunos[i].idade > alunoMaisVelho.idade) {
            alunoMaisVelho = alunos[i]
        }
    }
    return alunoMaisVelho.idade > 0 ? `${alunoMaisVelho.nome}, ${alunoMaisVelho.idade} anos` : null
}

function mediaIdadeAlunos(alunos) {
    let totalIdade = 0
    for (let i = 0; i < alunos.length; i++) {
        totalIdade += alunos[i].idade
    }
    return totalIdade / alunos.length
}

console.log('Aluno mais velho da turma A:', alunoMaisVelhoTurmaA(alunos))
console.log('Média de idade dos alunos:', mediaIdadeAlunos(alunos))

