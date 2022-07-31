// Exercício 4
// Crie testes para uma função que escreverá um conteúdo em um arquivo específico.
// Essa função deverá receber dois parâmetros: o nome do arquivo e o conteúdo desse arquivo.
// Após concluir a escrita do arquivo ela deverá retornar um ok.
// Descreva todos os cenários de teste utilizando describes;
// Descreva todos os testes que serão feitos utilizando it's;
// Crie as asserções validando se o retorno da função possui o valor e tipo esperado.


const { expect } = require('chai');
const escrevaArquivo = require('../fun5');
const fs = require('fs');
const sinon = require('sinon');

describe('Executa a função escrevaArquivo', () => {

  // Adicionar stub no arquivo de teste e o restore no after para restaurar a funcionalidade padrão após cada describe.
  before(() => {
    sinon.stub(fs, 'writeFileSync');
  });

  after(() => {
    fs.writeFileSync.restore();
  });

  describe('a resposta', () => {
    it('é uma "string"', () => {
      const resposta = escrevaArquivo('arquivo.txt', '#vqv conteúdo');

      expect(resposta).to.be.a('string');
    });

    it('é igual a "ok"', () => {
      const resposta = escrevaArquivo('arquivo.txt', '#vqv conteúdo');

      expect(resposta).to.be.equals('ok');
    });
  });
});