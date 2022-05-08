//src/renderWithRouter.

// 
// Após isso, vamos usar a função renderWithRouter que é uma função helper ou assistente. Uma função helper executa uma tarefa específica e não depende de outras funções.
// No nosso caso, a helper irá criar um histórico e renderizar o componente que iremos testar. Para não ficarmos sem contexto de onde essa função veio, ela foi tirada da documentação oficial da Testing Library que você pode encontrar aqui. Vamos salvar a helper num arquivo src/renderWithRouter.js e entendê-la antes de escrevermos os testes:

import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return ({
    ...render(<Router history={history}>{component}</Router>), history,
  });
};
export default renderWithRouter;

// 
// Aqui utilizaremos a biblioteca history para criar um histórico de navegação. A helper irá passar o histórico para o componente Router, e vai renderizar o componente que quisermos dentro dele, bastando apenas passar o componente como argumento quando a chamarmos.
// Existe uma forma de fazer sem o helper, mas ela implica em escrever bem mais código. Esse link tem um exemplo muito parecido com o que estamos fazendo, a grande diferença é que lá eles não utilizam uma função auxiliar. Repare que a sintaxe que utilizaremos será bem parecida com a do site, com a diferença de verbosidade que no exemplo do link acima será bem maior.
// Com a ajuda desta função, vamos escrever muito menos código na hora de testar, porque precisamos apenas chamar a renderWithRouter. Não podemos esquecer que devemos colocar o <BrowserRouter /> encapsulando o componente <App /> inteiro.
// Para fazermos isso, devemos colocá-lo no index.js. Isto é necessário porque queremos ter controle sobre o BrowserRouter nos testes. Se ele estiver dentro do componente que vamos testar, nós perderemos o controle sobre ele.
// Uma outra característica dessa função é que ela retorna tanto o componente que passamos como parâmetro, já encapsulado no router, quanto o histórico que geramos, o que também serve para nos levar a outras páginas com facilidade.