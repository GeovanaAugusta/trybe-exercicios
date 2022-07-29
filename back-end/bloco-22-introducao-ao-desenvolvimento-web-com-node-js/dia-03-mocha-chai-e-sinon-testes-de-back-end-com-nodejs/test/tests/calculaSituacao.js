// const { expect } = require('chai');

// const calculaSituacao = require('../examples/calculaSituacao');

// describe('Quando a média for menor que 7', () => {
//   it('retorna "reprovacao"', () => {
//     const resposta = calculaSituacao(4);

//     expect(resposta).equals('reprovacao');
//   });
// });


const { expect } = require('chai');

const calculaSituacao = require('./examples/calculaSituacao');

describe('Quando a média for menor que 7', () => {
  it('retorna "reprovacao"', () => {
    const resposta = calculaSituacao(4);

    expect(resposta).to.be.equals('reprovacao');
  });
});

describe('Quando a média for maior que 7', () => {
  it('retorna "aprovacao"', () => {
    const resposta = calculaSituacao(9);

    expect(resposta).to.be.equals('aprovacao');
  });
});

describe('Quando a média for igual a 7', () => {
  it('retorna "aprovacao"', () => {
    const resposta = calculaSituacao(7);

    expect(resposta).to.be.equals('aprovacao');
  });
});

// Lembre-se queum cenário está quebrado de propósito para correção.

// Perceba que o to e o be não alteraram em nada a validação realizada, porém a leitura fica muito mais fluida e natural. 