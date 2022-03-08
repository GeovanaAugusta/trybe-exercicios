const {
    sum, 
 } = require("./sum.js");

// Teste se o retorno de sum(4, 5) é 9

describe("Function sum()", () => {

it ("sum() returns the sum of numbers`", () => {
    expect(sum(4, 5)).toBe(9)
});

// Teste se o retorno de sum(0, 0) é 0

it ("sum() returns the sum of numbers`", () => {
    expect(sum(0, 0)).toBe(0)
});

// Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)

it ("sum() returns the sum of numbers`", () => {
    expect(()=> sum(4, '5')).toThrowError('')
});

// Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")
it ("sum() returns the sum of numbers`", () => {
    expect(()=> sum(4, '5')).toThrowError('parameters must be numbers')
});
});
