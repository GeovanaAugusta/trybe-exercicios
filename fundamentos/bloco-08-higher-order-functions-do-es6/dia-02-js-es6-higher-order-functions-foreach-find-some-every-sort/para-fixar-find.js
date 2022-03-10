// Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5 , 
// caso ele exista:

const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
  // Adiciona seu código aqui
  const divisible = numbers.find((number) => number % 3 === 0 && number % 5 === 0);
  return divisible;
}

console.log(findDivisibleBy3And5())

// Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  // Adicione seu código aqui:

  const fiveLetter = names.find((name, index) => names[index].length === 5);
  return fiveLetter;
}

console.log(findNameWithFiveLetters());

// Utilize o find para encontrar a música com id igual a 31031685 , caso ela exista:

const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ]
  
  function findMusic(id) {
    // Adicione seu código aqui
    const titleIs = musicas.find(titleRequired => titleRequired.id === id )
    return titleIs.title;
  }
  
  console.log(findMusic('31031685'));

//   https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// Se você precisa encontrar a posição de um elemento ou se um elemento existe em um array, use Array.prototype.indexOf() ou Array.prototype.includes().
// Veja também o método findIndex(), que retorna o índice do elemento encontrado no array ao invés do seu valor.