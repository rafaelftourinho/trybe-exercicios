// JUNTANDO EM UM MESMO ARRAY COMO SE FOSSEM UMA STRING
{
const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  return arrays.reduce((acc, cur) => [acc + [...cur]]);
}

console.log(flatten());
}

// RESPOSTA DO EXERCÍCIO

{
  const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten() {
    return arrays.reduce((acc, cur) => acc.concat(cur), []);
  }

  console.log(flatten());
}
