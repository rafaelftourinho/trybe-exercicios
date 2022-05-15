let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(cars[index]);
}

//RESULTADO
// Saab
// Volvo
// BMW

// let car = {
//   type: 'Fiat',
//   model: '500',
//   color: 'white',
// };

// for (let index in car) {
//   console.log(index, car[index]);
// }
// RESULTADO
// type Fiat
// model 500
// color white

let food = ['hamburguer', 'bife', 'acarajé'];
for (let value of food) {
  console.log(value);
};
//resultado: hamburguer, bife, acarajé;

// A DIFERENÇA ENTRE O FOR-IN E O FOR-OF É QUE O IN PERCORRE O ÍNDICE (PROPRIEDADE DECLARADA E NÃO SEU VALOR EM SI) DO ELEMENTO QUE DESEJAMOS. JÁ O FOR-OF PERCORRE OS ELEMENTOS DOS OBJETOS ITERÁVEIS ATRAVÉS DOS SEUS RESPECTIVOS VALORES E NÃO ÍNDICES COMO O IN.


// ---------------------------------- EXERCÍCIOS ----------------------------------

// 1 - Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.


let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

for (let name in names){
  console.log(`Olá ${names[name]}.`);
}


// 2 - Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for ( key in car){
  console.log(key);
}
