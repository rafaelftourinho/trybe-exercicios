// 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:

// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24

// Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

//MÉTODO 1  

// let fatorial = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let multiplicacao = 1;

// for (let i = 0; i <= fatorial.length - 1; i += 1){
//   multiplicacao *= fatorial[i]; 
// }

// console.log(multiplicacao);


//MÉTODO 2

let multiplicacao = 1;
let fatorial = [];
for (let index = 1; index <= 10; index +=1 ){
  fatorial.push(index);
}
for (let i = 0; i <= fatorial.length - 1; i += 1){
  multiplicacao *= fatorial[i]; 
}

console.log(multiplicacao);


// 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

//MÉTODO 1
let word = 'tryber';
let reverseWord = [];

// reverseWord = word.split('').reverse().join('');

// console.log(reverseWord);

//MÉTODO 2

// for (let index = 0; index < word.length; index += 1){
//   reverseWord += word[word.length -1 - index];
// }

// console.log(reverseWord);

//MÉTODO 3

for (let index = word.length -1; index >= 0; index -= 1){
  reverseWord += word[index];
}

console.log(reverseWord);

// 3- Considere o array de strings abaixo:

let array = ['java', 'javascript', 'python', 'html', 'css'];

// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let biggerArray = array[0];
let lowestArray = array[0];

for (let i = 0; i < array.length; i += 1){
  if (biggerArray.length < array[i].length){
    biggerArray = array[i];
  }else if (lowestArray.length > array[i].length){
    lowestArray = array[i];
  }
}

console.log(biggerArray, lowestArray);


// 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

let biggerPrimeNumber = 0;

for (let n1 = 50; n1 > 0; n1 -= 1){
  if(biggerPrimeNumber){
    break;
  }
  for (let n2 = 2; n2 < n1; n2 += 1){
    if ( n1 % n2 === 0 ){
      break;
    }if (n2 === n1 - 1){
      biggerPrimeNumber = n1;
    }
  }
}

console.log(biggerPrimeNumber);



// ---------------BÔNUS-----------------

// 1- Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:

// const quadrado = 5;

// for (let line = 1; line <= quadrado; line += 1){
//   let imprimeQuadrado = '';
//   for (let column = 1; column <= quadrado; column += 1){
//     imprimeQuadrado += '*';
//   }
//   console.log(imprimeQuadrado);
// }

// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

// MÉTODO 1

// const quadrado = 5;
// let imprimeQuadrado = '';

// for (let line = 1; line <= quadrado; line += 1){
//   for (let column = 1; column <= quadrado; column += 1){
//     imprimeQuadrado += '*';
//     break;
//   }
//   console.log(imprimeQuadrado);
// }

const quadrado = 5;
let imprimeQuadrado = '';

//MÉTODO 2

// for (let line = 1; line <= quadrado; line += 1){
//     imprimeQuadrado += '*';
//     console.log(imprimeQuadrado);
//   }


// 3- Agora inverta o lado do triângulo. Por exemplo:

for (let line = quadrado; line > 0; line -= 1){
  for (let column = 1; column <= quadrado; column += 1){
    if (line > column){
      imprimeQuadrado += " ";
    }else {
      imprimeQuadrado += "*";
    }
  }
  console.log(imprimeQuadrado);
  imprimeQuadrado = '';
}

// 4- Depois, faça uma pirâmide com n asteriscos de base:

let numero = 5;
let midNumber = (numero + 1)/ 2;

for (let line = 1; line <= midNumber; line += 1){
  let lineContent = "";

  for (let column = 1; column <= numero; column += 1){
    if(Math.abs(midNumber - column) < line){
      lineContent += "*";
    }else {
      lineContent = "";
    }
  }
  console.log(lineContent)
}


// 5 - 

let n = 7
const mid = Math.ceil(n/2);

for (let line = 1; line <= mid; line += 1){
  let conteudo = '';

  for (let column = 1; column <= n; column += 1){
    if (Math.abs(mid - column) === line - 1 || line == mid) {
      conteudo += "*";
    }else {
      conteudo += " ";
    }
  }
  console.log(conteudo);
}
