// const { expect } = require('chai');

// const leArquivo = require('./leArquivo');

// const CONTEUDO_DO_ARQUIVO = 'VQV com TDD';

// describe('leArquivo', () => {
//   describe('Quando o arquivo existe', () => {
//     describe('a resposta', () => {
//       const resposta = leArquivo('arquivo.txt');

//       it('é uma string', () => {
//         expect(resposta).to.be.a('string');
//       });

//       it('é igual ao conteúdo do arquivo', () => {
//         expect(resposta).to.be.equals(CONTEUDO_DO_ARQUIVO);
//       });
//     });
//   });

//   describe('Quando o arquivo não existe', () => {
//     it('a resposta é igual a "null"', () => {
//       const resposta = leArquivo('arquivo_que_nao_existe.txt');

//       expect(resposta).to.be.equal(null);
//     });
//   });
// });

// Usando o Sinon que é é uma ferramenta que fornece funções para diversos tipos dos Test Doubles, e abaixo existe a utilização de um tipo de Test Double, o stub. Stubs são objetos que podemos utilizar para simular interações com dependências externas ao que estamos testando de fato (na literatura, é comum referir-se ao sistema sendo testado como SUT, que significa System under Test).

// Mas o teste ainda quebra.  

// const fs = require('fs');
// const sinon = require('sinon');
// const { expect } = require('chai');

// const leArquivo = require('./leArquivo');

// const CONTEUDO_DO_ARQUIVO = 'VQV com TDD';

// sinon.stub(fs, 'readFileSync').returns(CONTEUDO_DO_ARQUIVO);

// describe('leArquivo', () => {
//   describe('Quando o arquivo existe', () => {
//     describe('a resposta', () => {
//       const resposta = leArquivo('arquivo.txt');

//       it('é uma string', () => {
//         expect(resposta).to.be.a('string');
//       });

//       it('é igual ao conteúdo do arquivo', () => {
//         expect(resposta).to.be.equals(CONTEUDO_DO_ARQUIVO);
//       });
//     });
//   });

//   describe('Quando o arquivo não existe', () => {
//     it('a resposta é igual a "null"', () => {
//       const resposta = leArquivo('arquivo_que_nao_existe.txt');

//       expect(resposta).to.be.equal(null);
//     });
//   });
// });

// O mocha nos fornece duas funções chamadas before e after. Como o nome diz, são funções que serão executadas "antes" e "depois" daquele "bloco" de testes, ou seja, daquele describe.
const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai');

const leArquivo = require('./leArquivo');

const CONTEUDO_DO_ARQUIVO = 'VQV com TDD';

describe('leArquivo', () => {
  describe('Quando o arquivo existe', () => {
    before(() => {
      sinon.stub(fs, 'readFileSync').returns(CONTEUDO_DO_ARQUIVO);
    });

    after(() => {
      fs.readFileSync.restore();
    });

    describe('a resposta', () => {
      it('é uma string', () => {
        const resposta = leArquivo('arquivo.txt');

        expect(resposta).to.be.a('string');
      });

      it('é igual ao conteúdo do arquivo', () => {
        const resposta = leArquivo('arquivo.txt');

        expect(resposta).to.be.equals(CONTEUDO_DO_ARQUIVO);
      });
    });
  });

  describe('Quando o arquivo não existe', () => {
    before(() => {
      sinon
        .stub(fs, 'readFileSync')
        .throws(new Error('Arquivo não encontrado'));
    });

    after(() => {
      fs.readFileSync.restore();
    });

    describe('a resposta', () => {
      it('é igual a "null"', () => {
        const resposta = leArquivo('arquivo_que_nao_existe.txt');

        expect(resposta).to.be.equal(null);
      });
    });
  });
});