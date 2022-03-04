const países = {
  França: 'Paris',
  Brasil: 'Brasília',
  Espanha: 'Madrid',
  Portugal: 'Lisboa',
};

const pairKeyValue = Object.entries(países);
console.log(pairKeyValue);

for(index in pairKeyValue) {
    console.log('--------');
    console.log('País:', pairKeyValue[index][0]);
    console.log('Capital:', pairKeyValue[index][1]);
  };

//   O [0]. [1], se refere a posição que cada elemento tem quando se torna um array através de entries. Faz o for justamente nesse array criado pelo entries e não pelo objeto em si