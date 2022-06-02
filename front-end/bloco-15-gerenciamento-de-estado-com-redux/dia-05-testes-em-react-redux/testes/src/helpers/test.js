import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './helpers/renderWithRouter';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';

describe('Cadastro de clientes', () => {
  test('Verifica se a tela Home renderiza corretamente', () => {
    renderWithRouter(<App />);

    const title = screen.getByRole('heading', {
      level: 3, name: /Cadastro de Clientes/i,
    });

    expect(title).toBeInTheDocument();
  });

  test('Verifica se a tela Login é renderizada corretamente', () => {
    // renderWithRouter(<App />, ['/login']);
    // const history = createMemoryHistory();
    // const store = createStore(rootReducer);
    // render(
    //   <Router history={ history }>
    //     <Provider store={ store }>
    //       <App />
    //     </Provider>
    //   </Router>,
    // );

    // history.push('/login');

    renderWithRouterAndRedux(<App />, { initialEntries: ['/login'] });

    const title = screen.getByRole('heading', {
      level: 3, name: /Login/i,
    });

    expect(title).toBeInTheDocument();
  });

  test('Verifica se a tela Customers renderiza os customers', () => {
    const initialStateMock = {
      customers: [
        {
          name: 'turma',
          age: '23',
          email: 'turma@turma.com',
        },
      ],
      login: {
        email: 'jensen@jensen.com',
        password: '1234',
      },
    };
    renderWithRouterAndRedux(<App />, {
      initialEntries: ['/customers'],
      initialState: initialStateMock,
    });

    // expect(screen.getByRole(
    //   'heading', { level: 1, name: /Nenhum cliente cadastrado/i },
    // )).toBeInTheDocument();
    expect(screen.getByText(/turma@turma.com/i)).toBeInTheDocument();
  });
});
