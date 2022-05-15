
// Sem função
let nome = 'João';

console.log('Bom dia, ' + nome);


// Com função
function bomDiaTryber(nome) {
  console.log('Bom dia, ' + nome);
}

bomDiaTryber('João'); // Bom dia, João
bomDiaTryber('Julia'); // Bom dia, Julia
bomDiaTryber('Marcelo'); // Bom dia, Marcelo

function bomDia() {
  return 'Bom dia!';
}

console.log(bomDia()); // Bom dia!
let status = 'deslogado';

function logarDeslogar() {
  if (status === 'deslogado') {
    status = 'logado';
  } else {
    status = 'deslogado';
  }
}

console.log(status); // deslogado

logarDeslogar();
console.log(status); // logado

logarDeslogar();
console.log(status); // deslogado

console.log('O usuário está ' + status); // O usuário está deslogado

// Com função
function soma(a, b) {
  return a + b;
}

console.log(soma(5, 2)); // 7

function maiorNum(primeiroNum, segundoNum) {
  if (primeiroNum > segundoNum) {
    return primeiroNum + ' é maior que ' + segundoNum;
  } else if (segundoNum > primeiroNum) {
    return segundoNum + ' é maior que ' + primeiroNum;
  } else {
    return 'Os números são iguais';
  }
}

console.log(maiorNum(10, 20)); // 20 é maior que 10
console.log(maiorNum(2, -5)); // 2 é maior que -5
console.log(maiorNum(1, 1)); // Os números são iguais


// ------------------------------------ EXERCÍCIOS ------------------------------------

// 1 - Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:

// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

function adicao (a, b){
  return (a + b);
}

console.log(adicao(5, 10));

function subtracao (a, b){
  return (a - b);
}

console.log(subtracao(5, 10));

function multiplicacao (a, b){
  return (a * b);
}

console.log(multiplicacao(5, 10));

function divisao (a, b){
  return (a / b);
}

console.log(divisao(5, 10));

function modulo (a, b){
  return (a % b);
}

console.log(divisao(10, 5));


// 2 - Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

function maiorNumero (a, b){
  if (a > b){
    return `o número ${a} é maior que o número ${b}`;
  } else 
  return `o número ${a} é menor que o número ${b}`;
}

console.log(maiorNumero(2, 5));


// 3 - Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

function maiorEntreTres (a, b, c){
  if (a > b && a > c){
    return `o número ${a} é maior que o número ${b} e que o número ${c}`;
  }else if (b > a && b > c){
    return `o número ${b} é maior do que o número ${a} e que o número ${c}`;
  }else 
  return `o número ${c} é maior que o número ${a} e que o número ${b}`;
}

console.log(maiorEntreTres(10, 5, 3));


// 4 - Faça um programa que, dado um valor recebido como parâmetro, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero", caso contrário.

function checkValue (number){
  if (number > 0){
    return 'Positive';
  }else if (number < 0){
    return 'Negative';
  } else {
    return 'Zero';
  }
}

console.log (checkValue(-13));


// 5 - Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

//MÉTODO 1

function triangle (a, b, c) {
  if (a < 0 || b < 0 || c < 0){ //Verificação de existência dos ângulos
    return 'Erro - ângulos inválidos';
  }else if (a + b + c === 180){ //Verificação sobre ser um triângulo
    return true;
  }else {
    return false;
  }
}

console.log(triangle(90, 45, 45));

//MÉTODO 2


function checkTriangle (a, b, c){
  let sumAllAngles = a + b + c;
  let checkAngles = (a < 0 || b < 0 || c < 0);
  if (checkAngles){
    return 'Erro - ângulos inválidos'
  }else if (sumAllAngles){
    return true;
  }else {
    return false;
  }
}

console.log(triangle(91, 45, 45));

