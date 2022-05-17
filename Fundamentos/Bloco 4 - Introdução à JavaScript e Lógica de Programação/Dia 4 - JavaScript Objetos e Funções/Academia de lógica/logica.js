// Exercício 1 - Crie uma função que calcule a área e o perímetro de um quadrilátero qualquer. Essa função deve receber dois parâmetros: base e altura e retornar um objeto no formato:
// { 
//     area: 0, 
//     perimetro: 0 
// }
// Fórmulas: perimetro = (2 * base) + (2 * altura) area = base * altura

function calculaAreaPerimetro (base, altura){
  let area = base * altura;
  let perimetro = (2 * base) + (2 * altura);
  let resultado = {
    area: area,
    perimetro: perimetro,
  };
  return resultado;
}

console.log(calculaAreaPerimetro(2, 3));

// REFATORADO




// Exercício 2 - Crie uma função que, dado um array de números inteiros, retorne a quantidade de números pares e ímpares no formato:
// {
//     pares: 0, 
//     ímpares: 0 
// }  

function paresImpares (numbers){
  let contPares = 0;
  let contImpares = 0;
  for (let index in numbers){
    if (numbers[index] % 2 === 0) {
      contPares += 1;
    } else{
    contImpares += 1;
    }
  }
  let objeto = {pares: contPares, impares: contImpares};
  return objeto;
}

console.log(paresImpares([1,2,3,4,5,6,7]));

// Exercício 3 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

// // valor de teste: 'trybe' e 'be'
// // valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be');  
// // Retorno esperado: true  
// verificaFimPalavra('joaofernando', 'fernan');  
// //  Retorno esperado: false;  

// Dica: Use o split.

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
