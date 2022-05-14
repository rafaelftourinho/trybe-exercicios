// EXERCICIO 1

//ADIÇÃO

// const a = 5;
// const b = 7;
// // const soma = a + b;

// console.log(a % b);

//EXERCÍCIO 2

// const num1 = 30;
// const num2 = 40;

// if (num1 > num2){
//   console.log(num1);
// } else {
//   console.log(num2);
// }

//EXERCIO 3

// const a = 21;
// const b = 56;
// const c = 19;

// // if (a > b && a > c){
// //   console.log(a);
// // } else if (b > a && b > c){
// //   console.log(b);
// // } else {
// //   console.log(c);
// // }


// //EXERCICIO 4

// const valor = 10;

// // if (valor > 0){
// //   console.log("positive");
// // } else if (valor < 0){
// //   console.log("negative");
// // } else {
// //   console.log("zero");
// // }

// switch (valor) {
//   case 10:
//     console.log("positive");
//   break;
//     case "negative":
//   console.log(-33);
//   break;
//   case "zero":
//   console.log(0);
//     break;
// }


// EXERCICIO 5

// const ladoA = -50;
// const ladoB = 80;
// const ladoC = 70;

// const somaDosLados = ladoA + ladoB + ladoC;
// const todosPositivos = ladoA > 0 && ladoB > 0 && ladoC > 0;

// if (todosPositivos){
//   if (somaDosLados === 180){
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// } else {
//   console.log("Erro. Não existem ângulos negativos!");
// }


//EXERCICIO 6

// const pecaXadrez = "";

// switch (pecaXadrez.toLocaleLowerCase()){
//   case "rei":
//     console.log("O rei anda uma casa para qualquer lado do tabuleiro");
//     break;
//   case "peao":
//     console.log("O peao anda uma casa para frente do tabuleiro");
//     break;
//   case "bispo":
//     console.log("O bispo anda em diagonal para qualquer lado do tabuleiro");
//     break;
//   case "cavalo":
//     console.log("O cavalo anda em formato de L para qualquer lado do tabuleiro");
//     break;
//   case "rainha":
//     console.log("O rainha anda para qualquer lugar do tabuleiro, desde que esteja vazio");
//     break;
//   case "torre":
//     console.log("A torre anda em horizontal e vertical para qualquer lado do tabuleiro");
//     break;
//   default:
//     console.log("Peça inválida");
// }

//EXERCÍCIO 7

// const nota = 110;

// if (nota < 0 || nota > 100){
//   console.log("Erro, nota inválida");
// } else if (nota >= 90){
//   console.log("A");
// } else if (nota >= 80){
//   console.log("B");
// } else if (nota >= 70){
//   console.log("C");
// } else if (nota >= 60){
//   console.log("D");
// } else if (nota >= 50){
//   console.log("E");
//   } else {
//     console.log("F")
//   } 

//EXERCÍCIO 8

  // const num1 = 11;
  // const num2 = 21;
  // const num3 = 43;

  // if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0){
  //   console.log(true);
  // } else {
  //   console.log(false);
  // }


//EXERCÍCIO 9

  // const num1 = 10;
  // const num2 = 22;
  // const num3 = 42;

  // if(num1 % 2 === 1  || num2 % 2 === 1 || num3 % 2 === 1){
  //   console.log(true);
  // } else {
  //   console.log(false);
  // }


//EXERCICIO 10

  // const custo = -2;
  // const valorDeVenda = 5;
  
  // if (custo >= 0 && valorDeVenda >= 0){
  //   const totalDeCusto = custo * 1.2;
  //   const totalDeLucro = (valorDeVenda - totalDeCusto) * 1000;
  //   console.log(totalDeLucro);
  // } else {
  //   console.log("Erro. Valor inválido")
  // }


//EXERCÍCIO 11

let aliquotaINSS;
let aliquotaIR;
const salarioBruto = 7000;

if (salarioBruto <= 1556.94){
  aliquotaINSS = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92){
  aliquotaINSS = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82){
  aliquotaINSS = salarioBruto * 0.11;
} else {
  aliquotaINSS = 570.88;
}
  const salarioBase = salarioBruto - aliquotaINSS;

if (salarioBase <= 1903.98){
  aliquotaIR = 0;
} else if (salarioBase <= 2826.65){
  aliquotaIR = (salarioBase * 0.075) - 142.80;
} else if (salarioBase <= 3751.05){
  aliquotaIR = (salarioBase * 0.15) - 354.80;
} else if (salarioBase <= 4664.68){
  aliquotaIR = (salarioBase * 0.225) - 636.13;
} else {
  aliquotaIR = (salarioBase * 0.275) - 869.36;
}

console.log(`Sálario: ${salarioBase - aliquotaIR} EBA VAMO TER FESTA ${salarioBruto}`);

// console.log("Salário: " + (salarioBase - aliquotaIR) + " EBA VAMO TER FESTA " + salarioBruto)

