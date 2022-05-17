// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

// Exemplo de palíndromo: arara.
// verificaPalindrome('arara');
// Retorno esperado: true
// verificaPalindrome('desenvolvimento');
// Retorno esperado: false

function palindromo (word){
  for (let i in word){
    if( word[i] != word[i.length - 1] - i){
      return false;
      }
    }
    return true;
  }

  console.log(palindromo("arara"));
  console.log(palindromo('desenvolvimento'));

function palindromo (palavra){
  let inverso = palavra.split('').reverse().join('');
  if (inverso === palavra){
    return true;
  }else {
    return false;
  }
}

console.log(palindromo("arara"));
console.log(palindromo('desenvolvimento'));

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

// Array de teste: [2, 3, 6, 7, 10, 1];.
// Valor esperado no retorno da função: 4.


// function biggerNumber (numbers){
// let biggerIndex = 0;
//   for (let index in bigger){
//     if (numbers[biggerIndex] < numbers[index]){
//       biggerIndex = numbers[index];
//     }
//   }
//   return biggerNumber;
// }

// console.log(biggerIndex([2, 3, 6, 7, 10, 1]));


function indiceDoMaior (numbers){
  let biggerIndex = 0;
  for (let index in numbers){
    if (numbers[biggerIndex] < numbers[index]){
      biggerIndex = index;
    }
  }
  return biggerIndex;
}

console.log(indiceDoMaior([2, 3, 6, 7, 10, 1]));


// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

// Array de teste: [2, 4, 6, 7, 10, 0, -3];.
// Valor esperado no retorno da função: 6

function indiceDoMenor (numbers){
  let lowestIndex = 0;
  for (let index in numbers){
    if (numbers[lowestIndex] > numbers[index]){
      lowestIndex = index;
    }
  }
  return lowestIndex;
}

console.log(indiceDoMenor([2, 4, 6, 7, 10, 0, -3]));


// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
// Valor esperado no retorno da função: Fernanda.

function biggerWord (caracteres){
  let maiorPalavra = caracteres[0];
  for (let index in caracteres){
    if (maiorPalavra.length < caracteres[index].length){
      maiorPalavra = caracteres[index];
    }
  }
  return maiorPalavra;
}

console.log(biggerWord(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));


// 🚀 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

// Array de teste: [2, 3, 2, 5, 8, 2, 3];.
// Valor esperado no retorno da função: 2.

// function repeteco (numbers){
//   let contador = 0;
//   let contadorNumero = 0;
//   let contadorIndexNumeroRepetido = 0;
//   for (let index in numbers){
//     let verificaNumero = numbers[index];
//     for(let index2 in numbers){
//       if (verificaNumero === numbers[index2]){
//         contador += 1;
//       }
//     }
//     if (contadorNumero > contadorIndexNumeroRepetido){
//       contadorIndexNumeroRepetido = contadorNumero;
//       conta
//     }
//   }
// }

function mostRepeated (arr){
  const rep = {};
  let mostRep = 0, res;

  for (const number of arr){
    rep[number] ? rep[number]++ : rep[number] = 1;
  };

  for (const count in rep){
    if (rep[count] > mostRep){
      mostRep = rep[count];
      res = count;
    };
  };

  return res;
};

console.log(mostRepeated([2, 3, 2, 5, 8, 2, 3]));



//MÉTODO 2

function repete (numbers){
  let contador = numbers.sort((a - b));

}

// 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

// Valor de teste: N = 5.
// Valor esperado no retorno da função: 1+2+3+4+5 = 15.

function somatorio (numero){
  let somaDeN = 0;
  for(let index = 1; index <= numero; index += 1){
    somaDeN = somaDeN + index;
  }
  return somaDeN;
}

console.log(somatorio(5));

// 7 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be');
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan');
// Retorno esperado: false

function verificaFimPalavra(palavra, fimPalavra) {
  let inversoPalavra = palavra.split('').reverse().join('');
  let inversoFimPalavra = fimPalavra.split('').reverse().join('');
  let result;

  for (let index = 0; index < inversoFimPalavra.length; index += 1) {
    if (inversoPalavra[index] !== inversoFimPalavra[index]) {
      result = false;
      break;
    } else {
      result = true;
    }
  }
  
  return result;
}

console.log(verificaFimPalavra('trybe', 'be'));
console.log(verificaFimPalavra('joaofernando', 'fernan'));


//---------------BÔNUS---------------

