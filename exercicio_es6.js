const alunos = [
    { nome: 'João', nota: 5 },
    { nome: 'Maria', nota: 7 },
    { nome: 'Pedro', nota: 8 },
    { nome: 'Ana', nota: 6 },
    { nome: 'Lucas', nota: 9 }
]

function alunosAprovados(alunos){
    return alunos.filter(aluno => aluno.nota >= 6)
}

console.log(alunosAprovados(alunos))