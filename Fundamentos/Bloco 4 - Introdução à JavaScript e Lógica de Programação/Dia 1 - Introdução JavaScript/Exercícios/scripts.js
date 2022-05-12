//EXERCÍCIO 1 

// ADIÇÃO
const a = 5;
const b = 7;

let resultado= a + b;

console.log(resultado);

//SUBTRAÇÃO

resultado = a - b;

console.log(resultado)

//MULTIPLICAÇÃO 
resultado = a * b;

console.log(resultado);

//DIVISÃO
resultado = a / b;

console.log(resultado);

//MÓDULO
resultado = a % b;

console.log(resultado);

//EXERCÍCIO 2

const numero1 = 10;
const numero2 = 15;

if (numero1 < numero2){
  console.log(numero2);
} else {
  console.log(numero1);
}

//EXERCÍCIO 3

const alfa = 183;
const beta = 294;
const gama = 120;

if (alfa > beta && alfa > gama){
  console.log(`O maior número é ${alfa}`);
}
else if (beta > alfa && beta > gama){
  console.log(`O maior número é ${beta}`);
}
else {
  console.log(`O maior número é ${gama}`);
}

//EXERCÌCIO 4

const valor = 171;

if (valor > 0 ){
  console.log("Positivo");
}
else if (valor < 0){
  console.log("Negativo");
}
else {
  console.log("Zero");
}

//EXERCÌCIO 5

const arestaA = 90;
const arestaB = 30;
const arestaC = 60;

const soma = arestaA + arestaB + arestaC;
const todosPositivos = arestaA > 0 && arestaB > 0 && arestaC > 0;

if (todosPositivos){
  if (soma === 180){
    console.log(true);
  } else {
    console.log(false);
  }
} else {
    console.log("Erro. Não existem ângulos negativos!")
  }

//EXERCÌCIO 6

const pecaXadrez = "Bispo";

switch (pecaXadrez.toLocaleLowerCase()){
  case "rei":
    console.log("O rei anda uma casa para qualquer direção do tabuleiro");
  break;

  case "bispo":
  console.log("O bispo anda na diagonal do local onde se encontra, para qualquer lado.");
  break;

  case "peao":
  console.log("O peão anda para frente somente");
  break;

  case "cavalo":
  console.log("O cavalo anda em forma de L para qualquer lado");
  break;

  case "torre":
  console.log("A torre anda na diagonal e na vertical para qualquer lado");
  break;

  default:
    console.log("A rainha anda para qualquer quadrado que esteja livro no tabuleiro");
    break;
}

// EXERCÍCIO 7

const nota = -40;

if (nota < 0 || nota > 100) {
  console.log("Erro, nota incorreta!");
} else if (nota >= 90){
  console.log("A");
} else if (nota >= 80){
  console.log("B");
} else if (nota >= 70){
  console.log("C");
} else if (nota >= 60){
  console.log("D");
} else if (nota >= 50){
  console.log("E");
} else {
  console.log("F");
}

//EXERCÍCIO 8

const number1 = 10;
const number2 = 21;
const number3 = 17;

if (number1 % 2 === 0|| number2 % 2 === 0 || number3 % 2 === 0 ) {
  console.log(true);
} else {
  console.log (false)
}

//EXERCÍCIO 9

const impar1 = 11;
const impar2 = 12;
const impar3 = 13;

if (impar1 % 2 !== 0 || impar2 % 2 !== 0 || impar3 % 2 !== 0) {
  console.log(true);
} else {
  console.log(false);
}

//EXERCÍCIO 10

const custo = 2;
const valorDeVenda = 5;

if(custo >= 0 && valorDeVenda >= 0){
  const totalDeCusto = custo * 1.2;
  const totalDeLucro = (valorDeVenda - totalDeCusto) * 1000;
  console.log(totalDeLucro);
}

//EXERCÌCIO 11

let aliquotaINSS;
let aliquotaIR;

const crescimentoSalario = 2000.00;

if (crescimentoSalario <= 1556.94) {
  aliquotaINSS = crescimentoSalario * 0.08;
} else if (crescimentoSalario <= 2594.92){
  aliquotaINSS = crescimentoSalario * 0.09;
} else if (crescimentoSalario <= 5189.82) {
  aliquotaINSS = crescimentoSalario * 0.11;
} else {
  aliquotaINSS = 570.88;
}

const salarioBase = crescimentoSalario - aliquotaINSS;

if (salarioBase <= 1903.98) {
  aliquotaIR = 0;
} else if (salarioBase <= 2826.65) {
  aliquotaIR = (salarioBase * 0.075) - 142.80;
} else if (salarioBase <= 3751.05){
  aliquotaIR = (salarioBase * 0.15) - 354.80;
} else if (salarioBase <= 4664.68) {
  aliquotaIR = (salarioBase * 0.225) - 636.13;
} else {
  aliquotaIR = (salarioBase * 0.275) - 869.36;
}

console.log(`Salário: ${(salarioBase - aliquotaIR)}`);






