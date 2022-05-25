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

let ulAcess = document.querySelector('#days');

const diasCalendario = () => {
  for (let index of dezDaysList){
    let listItems = document.createElement('li');
    listItems.className = 'day';
    for (let feriado of holiday) {
      if(feriado === index){
        listItems.classList.add('holiday');
        listItems.innerText = feriado;
        ulAcess.appendChild(listItems);
      }
    }
    for (let sexta of friday) {
      if (sexta === index){
        listItems.classList.add('friday');
        listItems.innerText = sexta;
        ulAcess.appendChild(listItems);
      }
    }
    ulAcess.appendChild(listItems);
    listItems.innerText = index;
  }
}

diasCalendario();

let div = document.querySelectorAll('div')[2];

const btnHolidays = (feriados) => {
  let btnFeriados = document.createElement('button');
  btnFeriados.id = 'btn-holiday';
  btnFeriados.innerText = feriados;
  div.appendChild(btnFeriados);
}

btnHolidays('Feriados');

const btn = document.querySelector('#btn-holiday');
const itemsHoliday = document.querySelectorAll('.holiday');


const changeHolidayColor = (white, originalColor) => {
  btn.addEventListener('click', function (){
    for (let index in holiday){
      if (itemsHoliday[index].style.backgroundColor === white){
        itemsHoliday[index].style.backgroundColor = originalColor;
      } else {
        itemsHoliday[index].style.backgroundColor = white;
      }
    }
  })
}

changeHolidayColor('white','rgb(238,238,238)');

const fridayBitch = (sextaFeira) => {
  let sexotafeira = document.createElement('button');
  sexotafeira.id = 'btn-friday';
  sexotafeira.innerText = sextaFeira;
  div.appendChild(sexotafeira);
}

fridayBitch('Sexta-feira');



const changeFridayText = () => {
  const btnFriday = document.querySelector('#btn-friday')
  const itemsFriday = document.querySelectorAll('.friday');
  for (let index in friday){
    if (itemsFriday[index].innerHTML === 'SEXTOU!!'){
      itemsFriday[index].innerHTML = friday[index];
    } else {
      itemsFriday[index].innerHTML = 'SEXTOU!!';
    }
  }
  btnFriday.addEventListener('click', changeFridayText);
}

changeFridayText();

const zoomIn = () => {
  let acess = document.querySelector('#days');

  acess.addEventListener('mouseover', (event) => {
    event.target.style.fontSize = '30px';
    event.target.style.color = 'black';
    event.target.style.fontWeight = '800';
  })
};

zoomIn();

const zoomOut = () => {
  let acess = document.querySelector('#days');

  acess.addEventListener('mouseout', (event) => {
    event.target.style.fontSize = '20px';
    event.target.style.color = 'gray';
    event.target.style.fontWeight = '200';
  })
}

zoomOut();

const personalTask = (tarefa) => {
  const divTask = document.querySelector('.my-tasks');
  let spanTask = document.createElement('span');
  spanTask.innerText = tarefa;
  divTask.appendChild(spanTask);
}

personalTask('Lavar louça');

const legendTask = (cor) => {
  const divTask = document.createElement('div');
  const divPai = document.querySelector('.my-tasks')
  divTask.className = 'task';
  divTask.style.backgroundColor = cor;
  divPai.appendChild(divTask);
}

legendTask('blue');

const taskSelected = () => {
  const divTask = document.querySelector('.task');
  divTask.addEventListener('click', (event) => {
    event.target.classList.toggle('selected');
  })
}

taskSelected();


const clickNoDia = () => {
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let colorTask = taskDiv.style.backgroundColor;

  days.addEventListener('click', (event) => {
    let estilo = event.target.style;
    if (estilo.backgroundColor === colorTask){
      estilo.background = "rgb(238,238,238)";
    } else {
      estilo.background = colorTask;
    }
  })
}

clickNoDia();

// const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

// const holiday = [24, 25, 31];
// const friday = [4, 11, 18, 25];

// let acessoUl = document.querySelector('#days');

// for (let index of dezDaysList) {
//   let itensLista = document.createElement('li');
//   itensLista.className = 'day';
//   for (let feriado of holiday) {
//     if (feriado === index) {
//       itensLista.classList.add('holiday');
//       itensLista.innerText = feriado;
//       acessoUl.appendChild(itensLista);
//   }
//   for (let sexta of friday) {
//     if (index === sexta) {
//       itensLista.classList.add('friday');
//       itensLista.innerText = sexta;
//       acessoUl.appendChild(itensLista);
//   }
// }
//   acessoUl.appendChild(itensLista);
//   itensLista.innerText = index;
//   }
// }

// let div = document.querySelectorAll('div')[2];
// const btnHolidays = (feriados) => {
//   let butaoFeriados = document.createElement('button');
//   butaoFeriados.id = 'btn-holiday';
//   butaoFeriados.innerText = feriados;
//   div.appendChild(butaoFeriados);
// }

// btnHolidays('Feriados');

// const btn = document.querySelector('#btn-holiday');
// const itemsHoliday = document.querySelectorAll('.holiday');
// // const branco = 'white';
// // const corOriginal = 'rgb(238,238,238)';


// const changeHolidayColor = (white, originalColor) => {
//   btn.addEventListener('click', function(){
//     for (let index in holiday){
//       if (itemsHoliday[index].style.backgroundColor === white){
//         itemsHoliday[index].style.backgroundColor = originalColor;
//       } else {
//         itemsHoliday[index].style.backgroundColor = white;
//       }
//     }
//   })
// }

// changeHolidayColor('white', 'rgb(238,238,238)');

// const fridayBitch = (sextaFeira) => {
//   let sexotafeira = document.createElement('button');
//   sexotafeira.id = 'btn-friday';
//   sexotafeira.innerText = sextaFeira;
//   div.appendChild(sexotafeira);
// }

// fridayBitch('Sexta-feira');


// const btnFriday = document.querySelector('#btn-friday');
// const itemsFriday = document.querySelectorAll('.friday');
// // const sextou = 'Sexta-feira';


// // const changeFridayText = (sextou) => {
// //   btnFriday.addEventListener('click', function(){
// //     for (index in friday) {
// //       if (itemsFriday[index].innerText === sextou) {
// //         itemsFriday[index].innerHTML = friday[index];
// //       } else {
// //         itemsFriday[index].innerText = sextou;
// //       }
// //     }
// //   })
// // }

// // changeFridayText('Sexta-feira');

// const changeFridayText = () => {
//   for (index in friday){
//     if (itemsFriday[index].innerHTML === 'SEXTOU!!!'){
//       itemsFriday[index].innerHTML = friday[index];
//     } else {
//       itemsFriday[index].innerHTML = 'SEXTOU!!!';
//     }
//   }
// }

// changeFridayText();
// btnFriday.addEventListener('click', changeFridayText);
