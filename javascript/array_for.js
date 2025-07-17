//const frutas = ["maçã", "banana", "laranja", "uva", "abacaxi"];

//for (let i = 0; i < frutas.length; i++) {
  //  console.log(frutas[i]);
//}

const alunos = [
  { nome: 'Ana', nota: 8, diciplina: 'Matemática' },
  { nome: 'Beto', nota: 5 },
  { nome: 'Carla', nota: 9 },
];

// map: transformar em lista de nomes
const nomes = alunos.map(b => b.nome);

// filter: só os aprovados
// const aprovados = alunos.filter(a => a.nota >= 6);
const aprovados = alunos.filter(a => a.nota >= 6);

// find: primeiro aluno com nota 9
const nota9 = alunos.find(a => a.nota === 9);

console.log(nomes);      // ['Ana', 'Beto', 'Carla']
console.log(aprovados);  // [{ nome: 'Ana'... }, { nome: 'Carla'... }]
console.log(nota9);      // { nome: 'Carla', nota: 9 }
