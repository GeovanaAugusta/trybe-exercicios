// 
// Aqui, fizemos os imports necessários: o próprio react, a helper e o componente que iremos testar.

import React from 'react';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

//  
// Importamos o teste em si, que chama a helper passando o componente a ser renderizado.
import renderWithRouter from './renderWithRouter';
import App, { About } from './App';
import userEvent from '@testing-library/user-event';



// 
// Agora que temos mais um caso de uso, é interessante colocar o describe, ele ajudará bastante na hora de separar os testes e numa eventual falha, saberemos qual teste falhou. Vamos colocá-lo abaixo:
describe('teste da aplicação toda', () => {
  
  // 
  //  Nesse primeiro caso, mostraremos como renderizar a aplicação toda, fazendo um teste geral, depois vamos ver como renderizar um componente específico.
it('deve renderizar o componente App', () => {
  renderWithRouter(<App />);

  const homeTitle = screen.getByRole('heading', {
    name: 'Você está na página Início',
  });
  expect(homeTitle).toBeInTheDocument();
});

// 
// Continuando os testes, vamos clicar no link About em nossa aplicação e verificar se estamos na página correta.

it('deve renderizar o componente Sobre', () => {
  const { history } = renderWithRouter(<App />);

  const aboutLink = screen.getByRole('link', { name: 'Sobre' });
  expect(aboutLink).toBeInTheDocument();

// 
// Com o userEvent (que deve ser importado da @testing-library/user-event), podemos interagir com os elementos da tela (nesse caso, vamos clicar no link Sobre). Depois disso, utilizaremos o history.location.pathname para verificar se estamos na página correta e, por último, checamos se o texto que aparece quando clicamos nesse link no navegador foi encontrado.
  userEvent.click(aboutLink);

  const { pathname } = history.location;
  expect(pathname).toBe('/about');

  const aboutTitle = screen.getByRole('heading',
    { name: /Você está na página Sobre/i });
  expect(aboutTitle).toBeInTheDocument();
});
});

// 
// Encerrando esse teste de aplicação total, vamos testar a página que deveria aparecer ao digitar na barra de endereços uma página que não existe:

// NÃO FUNCIONA - OK, CONSERTADO
it('deve testar um caminho não existente e a renderização do Not Found', () => {
  const { history } = renderWithRouter(<App />);

  // Devido a uma incompatibilidade de versão das bibliotecas utilizadas, só o history não funciona, assim preciso importar o act para nivelar e funcionar
  // history.push('/ssss');
  act( ()=> { history.push('/pagina-que-nao-existe/')})

  const notFoundTitle = screen.getByRole('heading',
    { name: /Página não encontrada/i, level: 1 });
  expect(notFoundTitle).toBeDefined();

  // screen.logTestingPlaygroundURL();
});

// 
// Até aqui nós aprendemos como testar nossa aplicação renderizando ela por completo. Mas é possível testar os componentes separadamente também. Vamos ver como:

it('deve renderizar o componente About (apenas componente)', () => {
  renderWithRouter(<About />);

  const aboutTitle = screen.getByRole('heading',
    { name: 'Você está na página Sobre' });
  expect(aboutTitle).toBeInTheDocument();
});