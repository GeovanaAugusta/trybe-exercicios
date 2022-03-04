// Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// // Seu código aqui.

// console.log(oddsAndEvens); // será necessário alterar essa linha 😉

// Bônus https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// https://stackoverflow.com/questions/1063007/how-to-sort-an-array-of-integers-correctly

const oddsAndEvens = [13, 3, 4, 10, 7, 2].sort((a,b) => a-b);

console.log(`Os números ${oddsAndEvens} estão em ordem crescente`); 


// Template literals

const oddsAndEvens1 = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens1 = () => {
  oddsAndEvens1[0] = 2;
  oddsAndEvens1[1] = 3;
  oddsAndEvens1[2] = 4;
  oddsAndEvens1[3] = 7;
  oddsAndEvens1[4] = 10;
  oddsAndEvens1[5] = 13;

  return oddsAndEvens1;
}

const sortedArray = sortOddsAndEvens1();
console.log(`Os números ${sortedArray} estão em ordem crescente`);