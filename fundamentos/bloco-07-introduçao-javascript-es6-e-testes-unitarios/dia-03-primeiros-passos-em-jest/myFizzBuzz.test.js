const {
myFizzBuzz
} = require('./myFizzBuzz.js');

// Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
describe('Function myfizzBuzz()', () => {
it('myFizzBuzz() returns the right phrase', () => {
expect(myFizzBuzz(15)).toBe('fizzbuzz')
});

// Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado

it('myFizzBuzz() returns the right phrase', () => {
    expect(myFizzBuzz(3)).toBe('fizz')
});

// Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado

it('myFizzBuzz() returns the right phrase', () => {
    expect(myFizzBuzz(5)).toBe('buzz')
});

// Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado

it('myFizzBuzz() returns the right phrase', () => {
    expect(myFizzBuzz(2)).toBe(2)
});

// Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado

it('myFizzBuzz() returns the right phrase', () => {
    expect(myFizzBuzz('a')).toBe(false)
});

});