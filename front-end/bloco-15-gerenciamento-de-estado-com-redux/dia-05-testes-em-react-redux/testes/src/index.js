import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

// Store provido pela nossa aplicação. Nos testes, precisamos prover um novo store para podermos controlá-lo
// Por último, mais uma mudança é necessária. Você aprendeu a utilizar o Redux colocando o Provider no arquivo App.js mas, para que os testes funcionem, é necessário que movamos o Provider para o index.js. Afinal de contas, nós precisamos ignorar o store provido na aplicação em favor do store que nossos testes proveem (e que podemos controlar!). Repare, portanto, que se renderizamos o componente <App /> nos testes nós não renderizamos o store da aplicação, que está fora desse componente. Assim ficamos livres para criar um novo store que podemos controlar no ambiente de testes!

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);