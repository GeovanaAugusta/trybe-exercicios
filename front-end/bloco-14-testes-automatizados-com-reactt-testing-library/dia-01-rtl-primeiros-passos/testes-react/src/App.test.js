import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('Verificando se existe o campo Email.', () => {
  // Acessar os elementos da tela
  render(<App />);
  const inputEmail = screen.getByLabelText('Email');
  // Fazer os testes
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail).toHaveProperty('type', 'email');
});

test('Verificando se existem dois botões', () => {
  render(<App />);
  const buttons = screen.getAllByRole('button');
  expect(buttons).toHaveLength(2);
});

test('Verificando se existe um botão de enviar', () => {
  render(<App />);
  const btnSend = screen.getByTestId('id-send');
  expect(btnSend).toBeInTheDocument();
  expect(btnSend).toHaveProperty('type', 'button');
  expect(btnSend).toHaveValue('Enviar');
});

test('Verificando se o botão e o campo email estão funcionando.', () => {
  // Primeiro renderizamos a aplicação, depois salvamos o email da pessoa usuária em uma variável (o que é uma boa prática).
  render(<App />);

  const EMAIL_USER = 'email@email.com';

  const textEmail = screen.getByTestId('id-email-user');
  expect(textEmail).toBeInTheDocument();
  // Depois, verificamos se a tag <h2> onde o email aparece na tela está apenas com o texto Valor:,
  expect(textEmail).toHaveTextContent('Valor:');

// Depois procuramos pelo o campo de email e o botão que enviará os dados.
  const btnSend = screen.getByTestId('id-send');
  const inputEmail = screen.getByLabelText('Email');
  // Simulamos a digitação da pessoa usuária no campo de email com o userEvent.type(inputEmail, EMAIL_USER), passando o campo do input como primeiro parâmetro e o valor esperado como segundo parâmetro ('email@email.com').
  userEvent.type(inputEmail, EMAIL_USER);
  // Simulamos um clique no botão com o userEvent.click(btnSend), passando o elemento do botão como parâmetro.
  userEvent.click(btnSend);

  // Verificamos se após o click, o campo de input do email retorna para vazio e se a tag <h2>, que anteriormente só exibia Valor:, agora recebe o email passado ao input, resultando em Valor: email@email.com.
  expect(inputEmail).toHaveValue('');
  expect(textEmail).toHaveTextContent(`Valor: ${ EMAIL_USER }`);
});





