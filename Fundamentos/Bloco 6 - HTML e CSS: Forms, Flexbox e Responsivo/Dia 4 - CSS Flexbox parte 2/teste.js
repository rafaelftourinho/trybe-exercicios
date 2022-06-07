function plusMinus(arr) {
  let countP = 0;
  let countN = 0;
  let countZ = 0;

  for (let value of arr) {
    if (value > 0) {
        countP += 1;
    } if (value < 0) {
        countN += 1;
    } if (value === 0) countZ += 1;
  }

  console.log((countP / arr.length).toFixed(6));
  console.log((countN / arr.length).toFixed(6));
  console.log((countZ / arr.length).toFixed(6));
}

const div = document.querySelectorAll('div[class^="a"]');
console.log(div);
// const section = document.querySelectorAll('section >[nav]');

let div2 = document.getElementsByClassName('ca');
console.log(div2);
div2 = Array.from(div2);
console.log(div2);
