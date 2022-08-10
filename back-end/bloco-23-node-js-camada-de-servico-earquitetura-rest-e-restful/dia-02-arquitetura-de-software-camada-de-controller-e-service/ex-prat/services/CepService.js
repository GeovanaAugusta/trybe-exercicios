
const CepModel = require('../models/CepModel');

const regexCep = /^\d{5}-?\d{3}$/;

// 2
const findAddressByCep = async (searchedCep) => {
  // Valida o CEP e em caso dele ser falso, retorna um erro
  if (!regexCep.test(searchedCep)) {
    return {
      error: {
        code: 'invalidData',
        message: 'CEP inválido',
      }
    }

  // Buscamos o CEP através do Model
  const cep = await CepModel.findAddressByCep(searchedCep);

  // Caso não encontre nenhum CEP, o service retorna um objeto de erro.
  if (!cep) {
    return {
      error: {
        code: 'notFound',
        message: 'CEP não encontrado'
      },
    };
  }

  // Por fim, retornamos o CEP correto
  console.log(cep);
  return cep;
};
}

// 3
const createCep = async ({ cep, logradouro, bairro, localidade, uf }) => {
  // Começamos buscando o cep que estamos tentando cadastrar
  const existingCep = await CepModel.findAddressByCep(cep);

  // Caso o CEP já exista, retornamos um erro dizendo que ele já existe
  if (existingCep) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'CEP já existente',
      },
    };
  }

  // Caso o CEP ainda não exista, chamamos o Model para criá-lo no banco, e devolvemos esse resultado
  return CepModel.createCep({ cep, logradouro, bairro, localidade, uf });
};

module.exports = {
  findAddressByCep,
  createCep,
};