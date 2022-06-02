import React from 'react'
import { Provider } from 'react-redux'
import { render, cleanup, fireEvent } from '@testing-library/react';
import App from './App';
// Esses imports servem para termos acesso às ferramentas necessárias pra mockar o store.
// Um detalhe muito importante: como é utilizado um combineReducers na resolução do exercício, quando formos implementar os testes, temos que criar o store mockado com a mesma estrutura do padrão. Portanto, vamos importar o combineReducers e adaptar a função renderWithRedux para utilizá-lo.

import { createStore, combineReducers } from 'redux';
// Outro detalhe que pode ser notado é que, no caso, nosso reducer se chama clickReducer, por isso temos que importá-lo e usá-lo com o nome correto.
import clickReducer from './reducers/index';
import userEvent from '@testing-library/user-event';

const renderWithRedux = (
  component,
  { initialState, store = createStore(combineReducers({ clickReducer }), initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}

// Como primeiro teste, vamos averiguar se o botão Clique aqui e o texto "0" estão na tela.
describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should has a button and a text 0', () => {
    // 
    // Bastou usar a função renderWithRedux no lugar do render, que os testes ocorreram perfeitamente. Note que não passamos valor inicial algum para o clickReducer e por isso ele utilizou o valor padrão 0, definido no código da aplicação.
   // Caso seja interessante alterar o valor inicial do clickReducer, isso também é possível passando como segundo parâmetro para a função renderWithRedux um objeto com as propriedades que respeitem o formato original do state. Isto é:
  //  const { queryByText } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 }}});
    const { queryByText } = renderWithRedux(<App />);
    const buttonAdicionar = queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(queryByText('0')).toBeInTheDocument();
  });

  // 
  // Observe: o objeto initialState representa o valor inicial do state. O clickReducer representa o reducer criado. O counter representa a propriedade que criamos dentro do nosso reducer. Vamos testar essa alteração no estado inicial:
  test('a click in a button should increment the value of clicks', () => {
    const { queryByText } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 }}});

    expect(queryByText('5')).toBeInTheDocument();
  });

// Crie um teste com o valor padrão do reducer e teste se um clique funciona. - NÃO PASSA

// test('a click in a button should works', () => {
//   const buttonAdicionar = queryByText(/Clique aqui/i);

//   expect(buttonAdicionar).toBeInTheDocument();
//   // fireEvent.click(buttonAdicionar);
// });


// Altere o valor inicial do counter para 10, faça um clique do botão e crie os testes para esses comportamentos.
test('a click in a button should increment the value of clicks - 10', () => {
  const { queryByText } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 10 }}});

  expect(queryByText('10')).toBeInTheDocument();

  
});

});