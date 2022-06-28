const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  return students.map((name, index) => ({
    name,
    average: grades[index].reduce((acc, curr) => acc + curr, 0) / grades[index].length,
  }));
}

console.log(studentAverage());

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

// SOLUÇÃO 2

const somaNotas = (acc, curr) => acc + curr;

const calculoMedias = (index) => grades[index].reduce(somaNotas, 0) / grades[index].length;

function studentAvarage2() {
  return students.reduce((acc, curr, index) => {
    const objeto = {
      name: curr,
      average: calculoMedias(index),
    };
    acc.push(objeto);
    return acc;
  }, []);
}

console.log(studentAvarage2());

