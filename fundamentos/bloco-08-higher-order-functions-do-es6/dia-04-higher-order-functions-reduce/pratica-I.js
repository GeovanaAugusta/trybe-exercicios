// 1 - Dada uma matriz, transforme em um array.

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];



function flatten(array) {
    // escreva seu código aqui
    const arr = array.reduce((accumulator, current) => accumulator.concat(current), [])
    console.log(arr)
}
flatten(arrays);

//   https://pt.stackoverflow.com/questions/318038/como-transformar-um-array-de-arrays-em-um-%C3%BAnico-array-em-javascript
// Como é string, faz concatenação para "somar" os itens, e colocá-las num array só


