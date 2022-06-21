const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

const isEven = (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
};

const isOdd = (number) => {
  if ((number % 2) > 0) {
    console.log(number, 'is odd');
  }
};

repeat(3, isEven); // Testa quais números serão pares;
repeat(3, isOdd); // Testa quais números serão ímpares;

//VÍDEO 

const sum = (num1, num2) => num1 + num2;

const sub = (num1, num2) => num1 - num2;

const multi = (num1, num2) => num1 * num2;

const div = (num1, num2) => num1 / num2;

const calculator = (func) => func(10,5);

console.log(calculator(sum));
console.log(calculator(sub));
console.log(calculator(multi));
console.log(calculator(div));
