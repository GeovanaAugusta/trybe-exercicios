// src/App.test.js
import { fireEvent, waitFor, screen } from '@testing-library/react';
import React from 'react';
import fetchMock from 'fetch-mock-jest';
import App from './App';
import renderWithRedux from './helper/index';


describe('Página principal', () => {
  test('Testa que o botão de adicionar cachorro está presente', async () => {
   renderWithRedux(<App />);
    const buttonDoguinho = screen.queryByText('Novo Doguinho');

    expect(buttonDoguinho).toBeInTheDocument();

    fetchMock.getOnce('https://dog.ceo/api/breeds/image/random', {
      body: { message: 'myDogUrl' },
    });

    fireEvent.click(buttonDoguinho);
    await waitFor(() => expect(fetchMock.called()).toBeTruthy());
  });
});


// Aqui nós usamos a biblioteca fetch-mock-jest para facilitar a nossa execução de testes assíncronos! É perfeitamente possível fazer os testes sem ela também, mas fica como sugestão para experimentarem!