// EXEMPLO 1

let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask);
// Tomar café

let searchForLastTask = tasksList[tasksList.length - 1];
console.log(searchForLastTask);
// Brincar com o cachorro

//EXEMPLO 2

// let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa
tasksList.unshift('Estudar lógica de programação');
console.log(tasksList);

['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']

// EXEMPLO 3

// let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.pop();  // remove a última tarefa
tasksList.shift(); // remove o primeiro da lista
tasksList.push('Estudar lógica de programação');
tasksList.unshift('Seguir estudando firme o conteúdo');
console.log(tasksList);

[ 'Tomar café', 'Reunião' ]

// EXEMPLO 4

// let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let indexOfTask = tasksList.indexOf('Reunião'); //procura o índice do elemento no array.
console.log(indexOfTask);

// 1

