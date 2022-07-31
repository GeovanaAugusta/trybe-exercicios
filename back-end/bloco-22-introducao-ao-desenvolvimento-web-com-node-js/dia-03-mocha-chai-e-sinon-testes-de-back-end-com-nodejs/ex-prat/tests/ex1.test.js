// Exercício 1: Fazendo uso de mocha e chai, estruture os testes para uma função que vai dizer se um número é "positivo", "negativo" ou "neutro":
// Essa função vai receber um número como parâmetro e retornar uma string como resposta;
// Quando o número passado for maior que 0 deverá retornar "positivo", quando for menor que 0 deverá retornar "negativo" e quando igual a 0 deverá retornar "neutro";
// Descreva todos os cenário de teste utilizando describes;
// Descreva todos os testes que serão feitos utilizando its;
// Crie as asserções validando se os retornos de cada cenário têm o tipo e o valor esperado.

// ./tests/numerosNaturais.test.js
const { expect } = require('chai');

const FnNumbers = require('../fun1');

describe('Executa a função FnNumbers', () => {
  describe('quando o número for maior que 0', () => {
    describe('a resposta', () => {
      it('é uma "string"', () => {
        const resposta = FnNumbers(10);

        expect(resposta).to.be.a('string');
      });

      it('é igual a "positivo"', () => {
        const resposta = FnNumbers(10);

        expect(resposta).to.be.equals('positivo');
      });
    });
  });

  describe('quando o número for menor que 0', () => {
    describe('a resposta', () => {
      it('é uma "string"', () => {
        const resposta = FnNumbers(-10);

        expect(resposta).to.be.a('string');
      });

      it('é igual a "negativo"', () => {
        const resposta = FnNumbers(-10);

        expect(resposta).to.be.equals('negativo');
      });
    });
  });

  describe('quando o número for igual a 0', () => {
    describe('a resposta', () => {
      it('é uma "string"', () => {
        const resposta = FnNumbers(0);

        expect(resposta).to.be.a('string');
      });

      it('é igual a "neutro"', () => {
        const resposta = FnNumbers(0);

        expect(resposta).to.be.equals('neutro');
      });

      it('o valor deve ser um número', () => {
        const resposta = FnNumbers('a');

        expect(resposta).to.be.equals('o valor deve ser um número');
      });
    });
  });
});