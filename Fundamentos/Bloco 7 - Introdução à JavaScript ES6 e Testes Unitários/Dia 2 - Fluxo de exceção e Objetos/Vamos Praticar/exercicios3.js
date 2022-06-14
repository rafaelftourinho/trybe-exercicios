const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addNightShift = (objeto, chave, valor) => {
  objeto[chave] = valor;
};

addNightShift(lesson2, 'turno', 'noite');
// console.log(lesson2);

const objectKeys = (obj) => Object.keys(obj);

// console.log(objectKeys(lesson3));

const objectLenght = (obj) => Object.keys(obj).length;

// console.log(objectLenght(lesson1));

const objectValues = (obj) => Object.values(obj);

// console.log(objectValues(lesson3));


const allLessons = {};
Object.assign(allLessons, { lesson1, lesson2, lesson3 });

const all = Object.assign({} , { lesson1, lesson2, lesson3 });
console.table(allLessons);
console.table(all);

const allStudents = (obj) => {
  let contador = 0;
  const array = Object.keys(obj);
  array.forEach((arr) => {
    contador += obj[arr].numeroEstudantes;
  })
  return contador;
}

console.log(allStudents(allLessons));

const objectKeysPosition = (obj, indice) => Object.values(obj)[indice];
console.log(objectKeysPosition(lesson1, 1));

const objectVerify = (obj, chave, valor) => {
  const array = Object.entries(obj);
  for (let i in array) {
    if (array[i][0] === chave && array[i][1] === valor) 
    return true;
  }
  return false
};

console.log(objectVerify(lesson1, 'professor', 'Maria Clara'));

// Bônus 1

const getNumberStudents = (obj) => {
  let contador = 0;
  const array = Object.keys(obj);
  array.forEach((arr) => {
    obj[arr].materia === 'Matemática' ? contador += obj[arr].numeroEstudantes : false;
  })
  return `O número total de alunos na aula de matemática é ${contador}.`;
}

console.log(getNumberStudents(allLessons));

// Bônus 2

const infos = (obj, nome) => {
  const allLessons = [];
  let allStudents = 0;
  const array = Object.values(obj);
  console.log(array);
  for (let i in array) {
    if (array[i].professor === nome) {
      allLessons.push(array[i].materia);
      allStudents += array[i].numeroEstudantes
  };
    };
    return { materia: allLessons, estudantes: allStudents};
};

const relatorio = (obj, nome) => {
  const rel = {};
  rel.professor = nome;
  Object.assign(rel, infos(obj, nome));
  return rel;
}

console.table(relatorio(allLessons, 'Maria Clara'));
