

// Jogo da pessoa estudante

let chatNumbers = [10, 23, 26, 18, 50, 49];

// Criando o jogo sorteado 

let number1 = Math.floor(Math.random() * 60) + 1;
let number2 = Math.floor(Math.random() * 60) + 1;
let number3 = Math.floor(Math.random() * 60) + 1;
let number4 = Math.floor(Math.random() * 60) + 1;
let number5 = Math.floor(Math.random() * 60) + 1;
let number6 = Math.floor(Math.random() * 60) + 1;

let megaSenaNumbers = [number1, number2, number3, number4, number5, number6];

// Visualizar os dois arrays
// Percorrer os elementos separadamente

// console.log('Jogo da galera: ');
// for (let index = 0; index < chatNumbers.length; index += 1) {
//   console.log(chatNumbers[index]);
// }

// console.log('Jogo da MegaSena: ');
// for (let index2 = 0; index2 < megaSenaNumbers.length; index2 += 1) {
//   console.log(megaSenaNumbers[index2]);
// }



// Qual a solução para comparação? (numberOfHits)

let numberOfHits = 0;
for (let index = 0; index < chatNumbers.length; index += 1) {
  // console.log('Número da galera: ', chatNumbers[index]);
  for (let index2 = 0; index2 < megaSenaNumbers.length; index2 += 1) {
    // console.log('Número da mega:', megaSenaNumbers[index2]);
    if (chatNumbers[index] === megaSenaNumbers[index2]) {
      numberOfHits += 1;
    }
  }
}


console.log('Jogo da galera: ', chatNumbers);
console.log('Jogo da Mega: ', megaSenaNumbers);
console.log('Número de acertos: ', numberOfHits);


// Sorteio - Número aleatório 


// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.floor(2.3));
// console.log(Math.floor(2.8));

console.log(Math.floor(Math.random() * 60) + 1);
