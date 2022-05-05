// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

afterEach(() => jest.clearAllMocks());

it('fetches a joke', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  // O código é muito similar ao do primeiro exemplo, alterando somente o mock.
  // Nesse exemplo estamos dizendo que global.fetch agora é uma função mockada com jest.fn que retorna uma Promise, e na primeira vez que ela for resolvida, deve se retornar um objeto com uma outra função json que também é uma Promise, que quando resolvida retorna sua piada.

  global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(joke),
  }));

  // Outra forma de escrever o mesmo exemplo seria com a sintaxe async/await, onde temos o mock dessa forma:

  // global.fetch = jest.fn(async () => ({
  //   json: async () => joke
  // }));

  render(<App />);
  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
  expect(renderedJoke).toBeInTheDocument();
  expect(global.fetch).toBeCalledTimes(1);
  expect(global.fetch).toBeCalledWith('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } });
});



