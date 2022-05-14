// const pecaXadrez = "TORRE";

// switch (pecaXadrez.toLocaleLowerCase()){
//   case "bispo":
//     console.log("O bispo anda na diagonal para qualquer um dos lados do tabuleiro");
//   break;

//   case "cavalo":
//     console.log("O cavalo anda em L para qualquer um dos lados do tabuleiro");
//   break;

//   case "peão":
//     console.log("O peão anda uma casa para frente");
//   break;

//   case "rainha":
//     console.log("A rainha anda para qualquer lugar do tabuleiro");
//   break;

//   case "torre":
//     console.log("A torre anda em horizontal e vertical pra qualquer um lado do tabuleiro");
//   break;

//   case "rei":
//     console.log("O rei anda um espaço para qualquer lado do tabuleiro");
//   break;

//   default:
//     console.log("Erro - Peça inválida");
// }

//EXERCICIO 7

// const nota = 49;

// if (nota < 0 || nota > 100){
//   console.log("Erro - nota inválida");
// } else if (nota >= 90){
//     console.log("A");
// } else if (nota >= 80){
//     console.log("B");
// } else if (nota >= 70){
//     console.log("C");
// } else if (nota >= 60){
//     console.log("D");
// } else if (nota >= 50){
//     console.log("E");
// } else {
//     console.log("F");
// }

//EXERCÍCIO 8

// const num1 = 5;
// const num2 = 12;
// const num3 = 43;

// if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0){
//   console.log(true);
// } else {
//   console.log(false);
// }

//EXERCICIO 9

// const num1 = 10;
// const num2 = 78;
// const num3 = 12;

// if (num1 % 2 !== 0 || num2 % 2 === 1 || num3 %2 === 1){
//   console.log(true);
// } else{
//   console.log(false);
// }


//EXERCICIO 10

// const custo = 1;
// const valorDeVenda = 3;

// if (custo >= 0 && valorDeVenda >= 0){
//   const totalDeCusto = custo * 1.2;
//   const lucro = (valorDeVenda - totalDeCusto) * 1000;
//   console.log(lucro);
// } else {
//   console.log("Erro - valores inválidos");
// }

//EXERCÍCIO 11

let inss;
let ir;
const salarioBruto = 3000;

if (salarioBruto <= 1556.94){
  inss = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.20){
  inss = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82){
  inss = salarioBruto * 0.11;
} else {
  inss = 570.88;
}

const salarioBase = salarioBruto - inss;

if (salarioBase <= 1903.98){
  ir = 0;
} else if (salarioBase <= 2826.65){
  ir = (salarioBase * 0.075) - 142.80;
} else if (salarioBase <= 3751.05){
  ir = (salarioBase * 0.15) - 354.80;
} else if (salarioBase <= 4664.68){
  ir = (salarioBase * 0.225) - 636.13;
} else {
  ir = (salarioBase * 0.275) - 869.36;
}

// const salarioLiquido = salarioBase - ir;

// console.log("Salário: " + (salarioBase - ir));

// console.log(`Salário: ${salarioBase - ir} OBAAA HORA DA CERVEJA!`);

//ACADEMIA DE LÓGICA

/*
_______________________________________________________________________________________________________________

1. Descubra a idade mínima

Escreva um algoritmo que recebe a idade de Marina, Silvia e Iza.

Imprima no terminal uma mensagem informando a pessoa mais jovem no formato:
--------------------------------------------------
"x é a pessoa mais jovem e possui y anos de idade"
--------------------------------------------------
*/ 

const marina = 40;
const silvia = 24;
const iza = 23;

let nome = "";

if (marina < silvia && marina < iza){
  nome = "Marina";
  console.log(`${nome} é a pessoa mais jovem e possui ${marina} anos de idade`);
} else if (silvia < marina && silvia < iza){
  nome = "Silvia";
  console.log(`${nome} é a pessoa mais jovem e possui ${silvia} anos de idade`);
} else {
  nome = "Iza";
  console.log(`${nome} é a pessoa mais jovem e possui ${iza} anos de idade`);
}
_______________________________________________________________________________________________________________
/*

2. Taxa Metabólica Basal

Ana Laura é uma nutricionista e quer disponibilizar uma calculadora de BMR (Taxa Metabólica Basal)
 em seu site, vamos ajudá-la escrevendo um algoritmo.

Ele recebe os seguintes dados:
 - age: número maior que 0
 - sex: M ou F
 - weight: Em (kg) com número maior que 0
 - height: Em (cm) com número maior que 0

A fórmula para homens:
 - (altura em centímetros x 6,25) + (peso em quilogramas x 9,99) – (idade x 4,92) + 5

A fórmula para mulheres:
 - (altura em centímetros x 6,25) + (peso em quilogramas x 9,99) – (idade x 4,92) – 161

Imprima no terminal o resultado do cálculo no formato:
-----------------------------------
"A taxa metabólica basal é: x Kcal"
-----------------------------------
*/

_______________________________________________________________________________________________________________
/*
3. Lanchonete da Trybe

A Trybe abriu uma lanchonete e precisa criar um menu de opções para que as pessoas consigam
 escolher qual lanche maravilhoso irão pedir.

Para isso escreva um algoritmo que recebe o número da opção escolhida conforme a tabela abaixo 
 e imprima no terminal a mensagem de acordo com a opção escolhida.

Tabela:
"1 - Trybe Lanche Feliz"
"2 - McTrybe"
"3 - TrybeWooper"
"4 - X-Trybe"
"5 - Triplo Trybe com JS"

Caso a pessoa escolha uma opção inexistente, imprima no terminal:
-----------------------------------
"Ainda não possuímos esta opção :("
-----------------------------------
*/


_______________________________________________________________________________________________________________




