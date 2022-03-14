// Neste exemplo, serão comparados valores para buscar o maior valor em um array. Tente criar essa função apenas com for e depois tente com reduce .
// A função passada agora pode possuir dois tipos de retorno:
// O retorno do próprio acumulador bigger (no caso true do ternário), o que significa que ele não será modificado; 
// O valor do elemento do array, number , que indica que possui um valor maior que bigger .

const numbers = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

const bigger = numbers.reduce(getBigger, 0);
console.log(bigger); // 85

// A função passada agora pode possuir dois tipos de retorno:
// O retorno do próprio acumulador bigger (no caso true do ternário), o que significa que ele não será modificado; o
// O valor do elemento do array, number , que indica que possui um valor maior que bigger .