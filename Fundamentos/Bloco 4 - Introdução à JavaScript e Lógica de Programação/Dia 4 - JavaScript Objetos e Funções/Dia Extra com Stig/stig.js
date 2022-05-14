

// let qualquerCoisa = ['madeira', 'ferro', 'ouro','cobre'];
// let umaCoisa = [1, 13, 26];
// // console.log(qualquerCoisa.concat(umaCoisa));

// // console.log([...qualquerCoisa, ...umaCoisa]);

// let objeto = {
//   id: 1,
//   name: 'lontra',
//   species: 'extinto',
//   age: 24,
// }

// const { id, age, species, name } = objeto;
// console.log(objeto.name);
// console.log(id, name , age, species);


// console.log(qualquerCoisa.fill(objeto, 3));

// qualquerCoisa.push([2, 1, [2], 5], objeto, 3, 5, 7 , 8);
// qualquerCoisa.push(['lontra','Xúlia', 'Está com tesão', 'Amanda bâbeda'], 3);
// // console.log (qualquerCoisa);
// console.log(qualquerCoisa.flat(2));

// MÉTODOS DISTINTOS
// const animals = [
//   {
//     id: 1,
//     name: 'lontra',
//     especie: 'extinta'
//   },
//   {
//     id: 2,
//     name: 'jacare',
//     especie: 'extinta'
//   },
//   {
//     id: 3,
//     name: 'tatu',
//     especie: 'extinta'
//   },
//   {
//     id: 4,
//     name: 'cigarra', 
//     especie: 'aloha'
//   }
// ]
// const find = animals.findIndex((animal) => animal.id === 3);
  
// console.log(find);

const numeros = [1, 2, 3, 4, 5, 3, 1, 4, 3];
const frase = 'O,próximo,projeto,vai,ser,fácil';

console.log(frase.replaceAll(',' , ' '));
// console.log(frase.includes('projeto'));
// console.log([...frase]);

console.log( numeros.join());
console.log(typeof numeros);
console.log(numeros.lastIndexOf(3));
// console.log(numeros.slice(5));

let videos = [
  {
    id: 1,
    nome: 'gatos fofinhos',
  },
  {
    id: 2,
    nome: 'cachorros fofinhos',
  },
]

const url = 'www.youtube.com/video/2';
console.log(url.split('/'));
const id = Number(url.split('/')[2]);
const findVideo = videos.find((video) => video.id === id);
console.log(findVideo);

