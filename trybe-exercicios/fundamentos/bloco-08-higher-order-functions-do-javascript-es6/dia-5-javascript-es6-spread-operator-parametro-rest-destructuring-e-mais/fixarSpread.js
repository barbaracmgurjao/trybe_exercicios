// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'morango', 'abacaxi', 'kiwi', 'mamão', 'manga'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['granola', 'mel', 'amendoim granulado'];

const fruitSalad = (fruit, additional) => {
  return [...specialFruit, ...additionalItens];
};

console.log(fruitSalad(specialFruit, additionalItens));