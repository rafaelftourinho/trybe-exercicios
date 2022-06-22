// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com.

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), 
    id2: callback('Luiza Drumond'), 
    id3: callback('Carla Paiva'), 
  }
  return employees;
};

const employeesResult = (name) => {
  const email = name.toLowerCase().split(' ').join('_');
  return { name, email: `${email}@trybe.com`};
};

console.log(newEmployees(employeesResult));

// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").
const checker = (myNumber, number) => myNumber === number;

const raffle = (myNumber, callback) => {
  const number = Math.floor(Math.random() * 6);
  return callback(myNumber, number) ? 'Parabéns, você ganhou!' : 'Tente novamente';
}

console.log(raffle(2, checker));

// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.

// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

// const verificacaoNota = (gabarito, resposta, callback) => {
//   let contador = 0;
//   for (let item in gabarito) {
//     const num = callback(gabarito[item], resposta[item]);
//     contador += num;
//     console.log('conferência',num);
//     console.log('contador',contador);
//   }
//   return `Resultado final : ${contador} pontos`;
// }

const verificacaoNota = (gabarito, resposta, callback) => {
  const result = gabarito.reduce((acc,_,i) => acc + callback(gabarito[i], resposta[i]) ,0);
  return `Resultado final : ${result} pontos`;
}

const comparacaoNumeros = (gabarito, resposta) => {
  if (gabarito === resposta) return 1;
  if (resposta === 'N.A') {
    return 0;
  } return -0.5;
}

console.log(verificacaoNota(RIGHT_ANSWERS, STUDENT_ANSWERS, comparacaoNumeros));
