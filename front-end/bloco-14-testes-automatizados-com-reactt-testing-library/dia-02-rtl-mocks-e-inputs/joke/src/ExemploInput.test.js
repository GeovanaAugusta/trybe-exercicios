// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ExemploInput from './ExemploInput';

test('alterando o valor dos campos e testando o valor guardado', () => {
  render(<ExemploInput />);
  const inputNome = screen.getByRole('textbox', { name: /nome/i });
  expect(inputNome).toBeInTheDocument();
  expect(inputNome).toHaveValue('');
  userEvent.type(inputNome, 'Estudante da Trybe');
  expect(inputNome).toHaveValue('Estudante da Trybe');

  const inputEmail = screen.getByRole('textbox', { name: /email/i });
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail).toHaveValue('');
  userEvent.type(inputEmail, 'estudante@trybe.com');
  expect(inputEmail).toHaveValue('estudante@trybe.com');
});

// No código, vemos como utilizar o userEvent. Observe que importamos uma biblioteca auxiliar para ter acesso a esta funcionalidade, que simula interações entre a pessoa usuária e a página. Ela é recomendada pois sua execução se aproxima mais a de uma interação real de uma pessoa, do que o método nativo que existe no RTL, o fireEvent.
// O userEvent dispara um evento no elemento da página selecionado. Observe a sintaxe no nosso exemplo: estamos utilizando o evento type, e no primeiro argumento da função informamos o elemento que queremos interagir (inputNome), e no segundo parâmetro, o que queremos digitar neste campo ('Estudante da Trybe').
// Uma coisa que pode ajudar a entender o que está acontecendo é O console.log na função handleInput do arquivo ExemploInput.js exibindo a variável value. Fazendo isso, o console.log aparece no teste, o que lhe dará a certeza de que a RTL está realmente renderizando sua página e inserindo nos campos os valores, da mesma forma que uma pessoa faria.