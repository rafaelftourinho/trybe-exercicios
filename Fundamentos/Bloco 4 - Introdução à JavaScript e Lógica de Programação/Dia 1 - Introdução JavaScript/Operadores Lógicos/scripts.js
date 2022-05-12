// OPERADOR LÓGICO &&

const currentHour = 3;
let message ="";

if (currentHour >= 22){
  message = "Não deveríamos comer nada, é hora de dormir"
}
else if (currentHour >= 18 && currentHour < 22){
  message = "Rango da noite, vamos jantar :D"
}
else if (currentHour >= 11 && currentHour < 14){
  message = "Hora do almoço!!!"
}
else if (currentHour >= 4 && currentHour < 11){
  message = "Hmmm, cheiro de café recém passado";
}
else {
  message = "Já devia estar dormindo, mocinho!"
}

console.log(message);

// OPERADOR LÓGICO ||

let weekDay = "sábado";

if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
  console.log("Oba, mais um dia de aprenziado na Trybe >:D");
}
else {
  console.log("FINALMENTE, descanso merecido UwU")
}




