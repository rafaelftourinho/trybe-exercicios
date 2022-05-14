// EXERCÍCIO 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (number of numbers){
  console.log(number);
}

// EXERCÍCIO 2
let sum = 0;

for (let i = 0; i < numbers.length; i += 1){
  sum += numbers[i];
}
console.log(sum);

// EXERCÍCIO 3
let soma = 0;

for (let i = 0; i < numbers.length; i += 1){
  soma += numbers[i];
}

let resultado = soma / numbers.length;

console.log(resultado);

// EXERCÍCIO 4
let soma = 0;

for (let i = 0; i < numbers.length; i += 1){
  soma += numbers[i];
}

let resultado = soma / numbers.length;

console.log(resultado);

if (resultado > 20){
  console.log('Valor maior que 20');
} else {
  console.log('Valor menor que 20');
}

// EXERCÍCIO 5

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let highNumbers = 0;

for(let i = 0; i < numbers.length; i += 1 ){
  if(numbers[i] > highNumbers){
    highNumbers = numbers[i];
  }
}

console.log(highNumbers);

// EXERCÍCIO 6

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impares = 0;

for (let i = 0; i < numbers.length; i += 1){
  if (numbers[i] % 2 !== 0){
    impares += 1; 
  }
}

if (impares === 0){
  console.log('Nenhum valor ímpar encontrado');
} else{
console.log(impares);
}

// EXERCÍCIO 7

let menorValor = numbers[0];

for(let i = 0; i < numbers.length; i += 1){
  if (numbers[i] <= numbers[i + 1]){
  menorValor = numbers[i];
  }
}
console.log(menorValor);

// EXERCÍCIO 8

let novoArray = [];

for (let i = 0; i < 26; i += 1){
  novoArray.push(i);
}

console.log(novoArray);

// // EXERCÍCIO 9

for (let i = 0; i < novoArray.length; i += 1){
  let novoValor = novoArray[i] / 2;
  console.log(novoValor);
}

// BÔNUS
// PEDIDO 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] < numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
      console.log(numbers);
    }
  }
}

console.log(numbers);

//ṔEDIDO 2 

for (let index =1; index < numbers.length; index += 1){
  for(let index2 = 0; index2 < index; index2 += 1){
    if(numbers[index] > numbers[index2]){
      let position = numbers[index];
      numbers[index] = numbers[index2];
      numbers[index2] = position;
    }
  }
}

console.log(numbers);

//PEDIDO 3

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let novoArray = [];

for (let index = 0; index < numbers.length; index += 1){
  if(index < numbers.length -1){
    novoArray.push(numbers[index] * numbers[index + 1]);
  } else {
    novoArray.push(numbers[index] * 2);
  }
}

console.log(novoArray);

//OUTRO MÉTODO 

const qualquerCoisa = numbers.map((number, index)=> {
  if(index < numbers.length - 1) return number * numbers[index + 1] ;
  return number * 2;
})

console.log(qualquerCoisa);

