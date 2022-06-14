// Adicionando novas chaves (keys)
const objeto = (objetos, chave, valor) => {
  objetos[chave] = valor;
  return objetos;
}

const ala = {
  age: 33
}

// Exemplo Object.keys()
console.log(objeto(ala, 'Nome', 'Lontra'));


const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

console.log(Object.keys(student1));

const listSkills = (student) => {
  const arrayOfSkills = Object.keys(student);
  for (let i in arrayOfSkills) {
    console.log(`${arrayOfSkills[i]}, Nível: ${student[arrayOfSkills[i]]}`);
  }
}

console.log('Estudante 1');
listSkills(student1);

console.log(`Nível de habilidade: ${Object.keys(student1)}`);


// Exemplo de Object.values()
const coolestTvShow = {
  name: "BoJack Horseman",
  genre: "adult animation",
  createdBy: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};

console.log(Object.values(coolestTvShow));

const student = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkill: 'Ótimo',
};

// const listSkillsValuesWithFor = (student) => {
//   const skills = [];
//   for(skill in student) {
//     skills.push(student[skill]);
//   }

//   return skills;
// };

const listSkillsValuesWithValues = (student) => Object.values(student);

// // Sem Object.values
// console.log(listSkillsValuesWithFor(student));

// Com Object.values
console.log(listSkillsValuesWithValues(student));


// Exemplo de Object.entries()
const coolestTvShow2 = {
  name: "BoJack Horseman",
  genre: "adult animation",
  createdBy: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};

console.log(Object.entries(coolestTvShow2));

const países = {
  França: 'Paris',
  Brasil: 'Brasília',
  Espanha: 'Madrid',
  Portugal: 'Lisboa',
};
const pairKeyValue = Object.entries(países);
console.log(pairKeyValue);

for(index in pairKeyValue) {
  console.log('--------');
  console.log('País:', pairKeyValue[index][0]);
  console.log('Capital:', pairKeyValue[index][1]);
};

// Exemplo de Object.assign()

// A função recebe um número qualquer de parâmetros. Todos são agregados como valores para adicionar ao objeto de destino!

Object.assign(destino, objeto1);
Object.assign(destino, objeto1, objeto2);
Object.assign(destino, objeto1, objeto2, objeto3, objeto4);

const person = {
  name: 'Alberto',
  lastName: 'Gomes',
  age: 20,
};

const info = {
  age: 23,
  job: 'engenheiro',
};

const family = {
  children: ['Maria', 'João'],
  wife: 'Ana',
};

Object.assign(person, info, family)
console.log(person)

const person1 = {
  name: 'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const clone = Object.assign(person1, lastName);

console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
console.log(person1); // { name: 'Roberto', lastName: 'Silva' }

clone.name = 'Maria';

console.log('Mudando a propriedade name através do objeto clone')
console.log(clone); // Output: { name: 'Maria', lastName: 'Silva' }
console.log(person1); // Output: { name: 'Maria', lastName: 'Silva' }
console.log('--------------');

person.lastName = 'Ferreira';

console.log('Mudando a propriedade lastName através do objeto person');
console.log(clone); // Output: { name: 'Maria', lastName: 'Ferreira' }
console.log(person1); // Output: { name: 'Maria', lastName: 'Ferreira' }

//Sintaxe para não ter um sendo mudado ao mudar o outro

const person = {
  name:'Roberto',
};

const lastName1 = {
  lastName: 'Silva',
};

const newPerson = Object.assign({},person,lastName1);
newPerson.name = 'Gilberto';
console.log(newPerson);
console.log(person);


const coolestTvShow3 = {
  name: "BoJack Horseman",
  genre: "adult animation",
  createdBy: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};

for (const property in coolestTvShow3) {
  console.log(coolestTvShow3[property]);
}

// BoJack Horseman
// adult animation
// Raphael Bob-Waksberg
// Princess Carolyn
// Princess Carolyn always lands on her feet.
// 6
