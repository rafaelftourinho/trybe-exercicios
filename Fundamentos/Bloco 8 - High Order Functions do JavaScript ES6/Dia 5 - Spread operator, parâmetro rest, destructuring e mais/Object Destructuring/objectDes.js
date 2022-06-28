
const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const totalInfos = {...user, ...jobInfos};
console.log(totalInfos);

const { name, age, nationality, profession, squad, squadInitials} = totalInfos;

console.log(`Hi, my name is ${name}, I'm ${age} years old and i'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`)
