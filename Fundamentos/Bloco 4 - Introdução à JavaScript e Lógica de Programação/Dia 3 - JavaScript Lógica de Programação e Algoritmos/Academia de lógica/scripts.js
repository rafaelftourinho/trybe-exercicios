// 1. Encontre o index através do valor de um elemento

// Escreva uma algoritmo que recebe 2 parâmetros:
//  - Um array
//  - O valor de um elemento de tipo primitivo

// Imprima no terminal a posição index em que o elemento encontra-se.

// Caso não o encontre, imprima:
// -----------------------------------
// "Elemento não encontrado no array"
// -----------------------------------

/* 01 - Onde está o elemento? */

function findIndexOf(array, element) {
  for (let elem of array) {
    if (elem === element) {
      return array.indexOf(element);
    }
  }
  return "Elemento não encontrado no array.";
}


// _______________________________________________________________________________________________________________


// 2. Retorne os números ímpares

// A Dora aventureira gostaria de ter uma lista com todos o números ímpares entre 1 e 50.

// Escreva um algoritmo que imprima no terminal uma string com todos os números inteiros ímpares desse intervalo.

// Use a seguinte estrutura na impressão:
// ----------------
// "x, y, z, ...n"
// ----------------


/* 02 - Retorne os números ímpares */

function oddNumbers() {
  let concatenator = "1";
  for (let index = 3; index <= 50; index = index + 1) {
    if (index % 2 !== 0) {
      concatenator = `${concatenator}, ${index}`;
    }
  }
  return `${concatenator}.`;
}


// _______________________________________________________________________________________________________________

// 3. Números divisíveis por 3

// Escreva um algoritmo que cria uma sequência numérica de inteiros de razão 1, o algoritmo deve receber antes de
//  criar o valor inicial e final.

// Conte os números divisíveis por 3 da sequência e imprima no terminal condicionando:

// Se houver 50 ou mais:
// ---------------------------------------
// "Há 50 ou mais números diviseis por 3"
// ---------------------------------------

// Caso o contrário:
// --------------------------
// "Sequência muito pequena."
// --------------------------


/* 03 - Números divisíveis por 3 */

function numbersDivisibleBy3(start, limit) {
  let counter = 0;
  for (let index = start; index <= limit; index = index + 1) {
    if (index % 3 === 0) {
      counter = counter + 1;
    }
  }
  if (counter >= 50) {
    return "Há 50 ou mais números diviseis por 3.";
  }
  return "Sequência muito pequena.";
}


// _______________________________________________________________________________________________________________

