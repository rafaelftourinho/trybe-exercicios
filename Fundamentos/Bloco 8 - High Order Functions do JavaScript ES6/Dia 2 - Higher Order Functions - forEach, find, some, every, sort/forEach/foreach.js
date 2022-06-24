// EXEMPLO 1
const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

emailListInData.forEach(item => showEmailList(item));


// EXEMPLO 2

const array = [1,2,3,4,5,6,7];

const teste = () => {
  const novoArray = [];
  array.forEach(item => novoArray.push(item * 3));
  return novoArray;
}
console.log(teste());
