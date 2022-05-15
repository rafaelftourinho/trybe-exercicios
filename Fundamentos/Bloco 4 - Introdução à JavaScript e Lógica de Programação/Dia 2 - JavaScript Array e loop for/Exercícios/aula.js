//EXERCÍCIO 1
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (index of numbers){
//   console.log(index);
// }

//EXERCÍCIO 2

// let soma = [];
// console.log(typeof(soma));

// for (let i = 0; i < numbers.length; i += 1){
//   soma += numbers[i];
// }
// console.log(soma);

//EXERCÍCIO 3

// let soma = 0;

// for (let i = 0; i < numbers.length; i += 1){
//   soma += numbers[i];
// }

// console.log(soma / numbers.length);

//EXERCÍCIO 4

// let soma = 0;

// for (let i = 0; i < numbers.length; i += 1){
//   soma += numbers[i];
// }

// let resultado = soma / numbers.length;
// console.log(resultado);

// if (resultado > 20){
//   console.log('Valor é maior que 20');
// }else {
//   console.log('Vaor é menor que 20');
// }

//EXERCÍCIO 5

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let highNumber = 0;

// for (let i = 0; i < numbers.length; i += 1){
//   if( numbers[i] > highNumber){
//     highNumber = numbers[i];
//   }
// }

// console.log(highNumber);

//EXERCÍCIO 6

// let impares = 0;

// let numbers = [5, 9, 3, 1, 70, 8, 100, 2, 35, 27];

// for (let i = 0; i < numbers.length; i += 1){
//   if (numbers[i] % 2 !== 0){
//     impares += 1;
//   }
// }

// if (impares === 0){
//   console.log('Nenhum valo ímpar encontrado');
// }else {
//   console.log(impares);
// }

//EXERCÍCIO 7

// let menorValor = numbers[0];

// for (let i = 1; i < numbers.length; i += 1){
//   if (numbers[i] < menorValor){
//     menorValor = numbers[i];
//   }
// }

// console.log(menorValor);


//EXERCÍCIO 8

// let newArray = [];

// for (let i = 1; i < 26; i += 1){
//   newArray.push(i);
// }

// console.log(newArray);

//EXERCÍCIO 9

// let newArray = [];

// for (let i = 1; i < 26; i += 1){
//   newArray.push(i);
// }
// let newValue = [];
// for (let i = 0; i < newArray.length; i += 1){
//   newValue[i] = newArray[i] / 2;
// }

// console.log(newValue);
// console.log(newArray);

// BÔNUS

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 1; index < numbers.length; index += 1) {
//   for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//     if (numbers[index] < numbers[secondIndex]) {
//       let position = numbers[index];
//       numbers[index] = numbers[secondIndex];
//       numbers[secondIndex] = position;
//     }
//   }
// }

// console.log(numbers);

// for (let index = 1; index < numbers.length; index += 1) {
//   for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//     if (numbers[index] > numbers[secondIndex]) {
//       let position = numbers[index];
//       numbers[index] = numbers[secondIndex];
//       numbers[secondIndex] = position;
//     }
//   }
// }

// // console.log(numbers);

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let novoArray = [];

// for (let i = 0; i < numbers.length; i += 1){
//   if(i < numbers.length -1){
//     novoArray.push(numbers[i] * numbers[i + 1]);
//   }else {
//     novoArray.push(numbers[i] * 2);
//   }
// }

// console.log(novoArray);

// // OUTRO MÉTODO

// const qualquerCoisa = numbers.map((number, index) => {
//   if (index < numbers.length -1) return number * numbers[index + 1];
//   return number * 2;
// } 
// );

// console.log(qualquerCoisa);

// EXERCÍCIO 5

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let highNumber = 0;
// console.log(typeof(highNumber));

// for (let i = 0; i < numbers.length; i += 1){
//   if ( numbers[i] > highNumber){
//     highNumber = numbers[i];
//   }
// }

// console.log(highNumber);


//EXERCÍCIO 6

// let numerosImpares = 0;

// for (let i = 0; i < numbers.length; i += 1){
//   if(numbers[i] % 2 !== 0){
//     numerosImpares += 1;
//   }
// }

// if (numerosImpares !== 0){
//   console.log(numerosImpares);
// }else {
//   console.log('nenhum valor ímpar encontrado');
// }


// BÔNUS

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 1; index < numbers.length; index += 1) {
//   for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//     if (numbers[index] > numbers[secondIndex]) {
//       let position = numbers[index];
//       numbers[index] = numbers[secondIndex];
//       numbers[secondIndex] = position;
//     }
//   }
// }

// console.log (numbers);

// 3

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let novoArray = [];

for (let i = 0; i < numbers.length; i += 1){
  if (i < numbers.length - 1){
    novoArray.push(numbers[i] * numbers[i + 1]);
  }else {
    novoArray.push(numbers[i] * 2);
  }
}

console.log(novoArray);


const newArray = numbers.map((numero, index) => {
  if(index < numbers. length -1) return numero * numbers[index +1];
  return numero *2;
}); 

console.log(newArray);

function soma(a, b){
  return a + b;
}

console.log(soma(1,2));

