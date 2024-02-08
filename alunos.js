// Definindo um array de objetos representando alunos
const alunos = [
    { nome: "João", nota: 8 },
    { nome: "Maria", nota: 7 },
    { nome: "Pedro", nota: 5 },
    { nome: "Ana", nota: 9 },
    { nome: "Carlos", nota: 6 }
];

// Função para filtrar alunos com nota maior ou igual a 6
function filtrarAlunos(aprovados) {
    return alunos.filter(aluno => aluno.nota >= aprovados);
}

// Chamando a função e imprimindo o resultado
console.log(filtrarAlunos(6));
