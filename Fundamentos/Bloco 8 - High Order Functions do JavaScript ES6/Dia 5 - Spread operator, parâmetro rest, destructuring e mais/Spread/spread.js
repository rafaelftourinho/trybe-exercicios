// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Banana', 'Maça', 'Abacaxi'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Arroz', 'Feijão', 'Macarrão'];

const fruitSalad = (fruit, additional) => {
  const mix = [...fruit, ...additional]
  return mix;
};

console.log(fruitSalad(specialFruit, additionalItens));
