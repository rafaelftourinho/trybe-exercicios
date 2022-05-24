function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const holiday = [24, 25, 31];
const friday = [4, 11, 18, 25];

let acessoUl = document.querySelector('#days');

for (let index of dezDaysList) {
  let itensLista = document.createElement('li');
  itensLista.className = 'day';
  for (let feriado of holiday) {
    if (feriado === index) {
      itensLista.classList.add('holiday');
      itensLista.innerText = feriado;
      acessoUl.appendChild(itensLista);
  }
  for (let sexta of friday) {
    if (index === sexta) {
      itensLista.classList.add('friday');
      itensLista.innerText = sexta;
      acessoUl.appendChild(itensLista);
  }
}
  acessoUl.appendChild(itensLista);
  itensLista.innerText = index;
  }
}

let div = document.querySelectorAll('div')[2];
const btnHolidays = (feriados) => {
  let butaoFeriados = document.createElement('button');
  butaoFeriados.id = 'btn-holiday';
  butaoFeriados.innerText = feriados;
  div.appendChild(butaoFeriados);
}

btnHolidays('Feriados');

const btn = document.querySelector('#btn-holiday');
const itemsHoliday = document.querySelectorAll('.holiday');
// const branco = 'white';
// const corOriginal = 'rgb(238,238,238)';


const changeHolidayColor = (white, originalColor) => {
  btn.addEventListener('click', function(){
    for (let index in holiday){
      if (itemsHoliday[index].style.backgroundColor === white){
        itemsHoliday[index].style.backgroundColor = originalColor;
      } else {
        itemsHoliday[index].style.backgroundColor = white;
      }
    }
  })
}

changeHolidayColor('white', 'rgb(238,238,238)');

const fridayBitch = (sextaFeira) => {
  let sexotafeira = document.createElement('button');
  sexotafeira.id = 'btn-friday';
  sexotafeira.innerText = sextaFeira;
  div.appendChild(sexotafeira);
}

fridayBitch('Sexta-feira');


const btnFriday = document.querySelector('#btn-friday');
const itemsFriday = document.querySelectorAll('.friday');
// const sextou = 'Sexta-feira';


// const changeFridayText = (sextou) => {
//   btnFriday.addEventListener('click', function(){
//     for (index in friday) {
//       if (itemsFriday[index].innerText === sextou) {
//         itemsFriday[index].innerHTML = friday[index];
//       } else {
//         itemsFriday[index].innerText = sextou;
//       }
//     }
//   })
// }

// changeFridayText('Sexta-feira');

const changeFridayText = () => {
  for (index in friday){
    if (itemsFriday[index].innerHTML === 'SEXTOU!!!'){
      itemsFriday[index].innerHTML = friday[index];
    } else {
      itemsFriday[index].innerHTML = 'SEXTOU!!!';
    }
  }
}

changeFridayText();
btnFriday.addEventListener('click', changeFridayText);
