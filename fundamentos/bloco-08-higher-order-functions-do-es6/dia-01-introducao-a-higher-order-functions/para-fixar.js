// Vamos praticar com os seguintes exercícios:
// 1 - Crie uma função que retorne a string 'Acordando!!' ;
// 2 - Crie outra função que retorne a string 'Bora tomar café!!' ;
// 3 - Crie mais uma função que retorne a string 'Partiu dormir!!' ;
// 4 - Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores. 

const phrase = () => 'Acordando';
console.log(phrase())

const phrase2 = () => 'Bora tomar café!!';
console.log(phrase2());

const phrase3 = () => 'Partiu dormir!!';
console.log(phrase3());

const doingThings = (func) => {
    const phrases = func();
    console.log(phrases);
};

doingThings(phrase);
doingThings(phrase2);
doingThings(phrase3);