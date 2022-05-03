// Testando apenas um componente

import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from '../components/ValidEmail';

// Observe que a estrutura é bem parecida com a dos outros testes. O que foi modificado é o que está sendo renderizado. No lugar de render(<App />), colocamos render(<ValidEmail email={ EMAIL_USER } />). O componente que queremos renderizar precisa de uma props para funcionar, portanto precisamos passar um valor para ela, que no caso é email={ EMAIL_USER }. O teste verifica se, com a prop passada, o nosso teste passará.

test('Testando um componente, caso o email seja válido.', () => {
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Válido');
  expect(isValid).toBeInTheDocument();
});

// Já estamos testando o cenário onde o email é válido, agora precisamos testar o cenário contrário, ou seja, quando o email é inválido. Para isso, basta criar um novo teste, definindo a constante EMAIL_USER com o valor de um email inválido e alterando o texto buscado para Email inválido. Adicione o teste abaixo e rode os testes:

test('Testando um componente, caso o email seja inválido.', () => {
  const EMAIL_USER = 'emailerrado';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Inválido');
  expect(isValid).toBeInTheDocument();
});

// Agora, para você começar a fixar o assunto, adicione novas funcionalidades a esse componente e faça o teste:
// Não exibir a mensagem caso o email ainda não tenha sido enviado.
// Mude a cor do texto caso o email seja válido ou inválido.
// Dicas: Você pode usar o .not para negar o expect (.not.toBeInTheDocument()) no seu teste e também usar a propriedade styles no seu componente para trocar a cor.