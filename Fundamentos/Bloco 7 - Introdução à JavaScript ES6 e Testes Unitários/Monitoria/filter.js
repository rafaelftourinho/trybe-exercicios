// Exemplo 1
function isInRange(value) {
  if (typeof value !== 'number') {
    return false;
  } return value >= this.lower && value <= this.upper;
}

let data = [10, 20, '30', 1, 5, 'JavaScript Filter', undefined, 'example'];

let range = {
  lower: 1,
  upper: 10
};

let numberInRange = data.filter(isInRange, range);

console.log(numberInRange)

// Exemplo 1 com arrow function

// const isInRange = (value) => {
//   if (typeof value !== 'number') {
//     return false;
//   } return value >= this.lower && value <= this.upper;
// }

// let data = [10, 20, '30', 1, 5, 'JavaScript Filter', undefined, 'example'];

// let range = {
//   lower: 1,
//   upper: 10
// };

// let numberInRange = data.filter(isInRange, range);

// console.log(numberInRange)


// Exemplo 2

let cities = [
  {name: 'Los Angeles', population: 3792621},
  {name: 'New York', population: 8175133},
  {name: 'Chicago', population: 2695598},
  {name: 'Houston', population: 2099451},
  {name: 'Philadelphia', population: 1526006},
]

// cities.filter((city) => city.population < 3000000).sort((c1,c2) => c1.population - c2.population).map((city) => console.log(`${city.name} : ${city.population}`));

const filter = cities.filter((city) => city.population < 3000000);
const sort = filter.sort((c1,c2) => c1.population - c2.population);
const map = sort.map((city) => console.log(`${city.name} : ${city.population}`));

console.log(filter, sort, map);

// let bigCities = cities.filter((e) => {
//   console.log(e.population > 3000000);
// })

