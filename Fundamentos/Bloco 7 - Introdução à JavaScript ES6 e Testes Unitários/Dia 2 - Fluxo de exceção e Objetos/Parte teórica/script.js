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

