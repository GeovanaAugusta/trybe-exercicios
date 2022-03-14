// Para fixar e praticar, vamos fazer uma salada de frutas com itens adicionais que você desejar. Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens , faça a função retornar uma lista única contendo todos os itens da nossa salada de frutas usando o spread .

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Goiaba', 'Jabuticaba', 'Morango'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Chocolate', 'Sorvete', 'Castanha'];

const fruitSalad = (fruit, additional) => {
  // Escreva sua função aqui
 return ([...fruit, ...additional])
};

console.log(fruitSalad(specialFruit, additionalItens));
// Dentro da function, devo usar ([]), numa const fora pode usar direto []