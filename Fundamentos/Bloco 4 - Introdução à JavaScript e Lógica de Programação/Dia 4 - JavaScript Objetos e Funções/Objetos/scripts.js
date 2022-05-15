// let diasDaSemana = {
//   1: 'domingo',
//   2: 'segunda',
//   3: 'terça',
//   4: 'quarta',
//   5: 'quinta',
//   6: 'sexta',
//   7: 'sábado',
//   };
  
//   // diasDaSemana.1; // SyntaxError: Unexpected number
//   diasDaSemana['1']
//   console.log(diasDaSemana); // domingo




//   let conta = {
//     agencia: '0000',
//     banco: {
//       cod: '012',
//       id: 4,
//       nome: 'TrybeBank',
//     },
//   };
  
//   let infoDoBanco = 'banco';
//   console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
//   console.log(conta[infoDoBanco]['nome']); // TrybeBank
  
//   console.log(conta.agencia); // 0000
//   console.log(conta['agencia']); // 0000
  
//   console.log(conta.banco.cod); // 012
//   console.log(conta['banco']['id']); // 4

//   let usuario = {
//     id: 99,
//     email: 'jakeperalta@gmail.com',
//     infoPessoal: {
//       nome: 'Jake',
//       sobrenome: 'Peralta',
//       endereco: {
//         rua: 'Smith Street',
//         bairro: 'Brooklyn',
//         cidade: 'Nova Iorque',
//         estado: 'Nova Iorque',
//       },
//     },
//   };
  
//   console.log(usuario['id']); // 99
//   console.log(usuario.email); // jakeperalta@gmail.com
  
//   console.log(usuario.infoPessoal.endereco.rua); // Smith Street
//   console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque




//   let moradores = [
//     {
//       nome: 'Luiza',
//       sobrenome: 'Guimarães',
//       andar: 10,
//       apartamento: 1005,
//     },
//     {
//       nome: 'William',
//       sobrenome: 'Albuquerque',
//       andar: 5,
//       apartamento: 502,
//     },
//     {
//       nome: 'Murilo',
//       sobrenome: 'Ferraz',
//       andar: 8,
//       apartamento: 804,
//     },
//     {
//       nome: 'Zoey',
//       sobrenome: 'Brooks',
//       andar: 1,
//       apartamento: 101,
//     },
//   ];
  
//   let primeiroMorador = moradores[0];
//   console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
//   console.log(primeiroMorador['andar']); // 10
  
//   let ultimoMorador = moradores[moradores.length - 1];
//   console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
//   console.log(ultimoMorador.nome); // Zoey




// --------------------------EXERCÍCIOS PARA FIXAR--------------------------

// 1 - Crie um objeto player contendo as variáveis listadas abaixo.

// let name = 'Marta';
// let lastName = 'Silva';
// let age = 34;
// let medals = { golden: 2, silver: 3 };

// let athlete = [
//   { name: 'Marta',
//   lastName: 'Silva',
//   age: 34,
//   medals: [{
//     golden: 2,
//     silver: 3,
//   }],
//   }];

  // 2 - Acesse as chaves name, lastName e age e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".

// console.log(athlete[0].name);
// let fullName = athlete[0].name + ' ' + athlete[0].lastName;

//   console.log(`A jogadora ${fullName} tem ${athlete[0].age} anos de idade`);


  // 3 - Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.

  let name = 'Marta';
  let lastName = 'Silva';
  let age = 34;
  let medals = { golden: 2, silver: 3 };
  
  let athlete = [
    { name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
      golden: 2,
      silver: 3,
    },
    bestInTheWorld: {
      1:[2006, 2007, 2008, 2009, 2010, 2018],
    },
    }];

    let fullName = athlete[0].name + ' ' + athlete[0].lastName;

    // 4 - Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".

    // console.log(athlete[0].bestInTheWorld[1].length);

  console.log(`A jogadora ${fullName} foi eleita a melhor atleta do mundo por ${athlete[0].bestInTheWorld[1].length} anos`);


  // 5 - Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".


    console.log(`A jogadora possui ${athlete[0].medals.golden} medalhas de ouro e ${athlete[0].medals.silver} medalhas de prata`);
