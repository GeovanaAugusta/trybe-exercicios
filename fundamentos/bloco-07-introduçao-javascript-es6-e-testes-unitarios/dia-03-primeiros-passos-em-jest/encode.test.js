const {
    encode,
} = require('./encode.js');

describe('Function encode()', () => {

    // Teste se encode [é definida];
    it('encode() is defined', () => {
        expect(encode).toBeDefined();
      });


// Teste se encode e decode são funções;
it('encode() is a function?', () => {
    expect(typeof(encode)).toEqual('function')
    });

// Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;

it('encode() is equal?', () => {
    expect(encode('a', 'e', 'i', 'o', 'u')).toEqual('1', '2', '3', '4', '5')
    });


// Teste se as demais letras/números não são convertidos para cada caso;

it('encode() is not equal ?', () => {
    expect(encode('b', 'c', 'd', 'f', 'g')).not.toEqual('1', '2', '3', '4', '5')
    });

// Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.

it('encode() parameter is the same length as string return', () => {
    expect(encode('Geovana').length).toEqual(7)
})

});