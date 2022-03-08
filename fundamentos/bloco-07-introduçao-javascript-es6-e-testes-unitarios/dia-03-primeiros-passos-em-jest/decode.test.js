const {
    decode,
} = require('./decode.js');

describe('Function encode()', () => {

    // Teste se encode e decode são funções;
it('decode() is a function?', () => {
expect(typeof(decode)).toBe('function')
});
   // Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u , respectivamente;
    it('decode() is equal ?', () => {
    expect(decode('1', '2', '3', '4', '5')).toEqual('a', 'e', 'i', 'o', 'u')
    });

// Teste se as demais letras/números não são convertidos para cada caso;
it('decode() is not equal?', () => {
    expect(decode('6', '7', '8', '9', '0')).not.toEqual('a', 'e', 'i', 'o', 'u')
    });

// Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.

it('decode() string is the same lenght', () => {
    expect(decode('1').length).toEqual(1)
})

});
