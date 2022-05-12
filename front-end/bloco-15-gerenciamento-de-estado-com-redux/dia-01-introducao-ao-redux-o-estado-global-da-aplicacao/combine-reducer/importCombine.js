import { createStore } from 'redux';
// Importando o reducer combinado que fizemos logo acima

// Agora basta fazer a sua importação no seu store para a mágica acontecer!

import reducerCombinado from './index';

const store = createStore(reducerCombinado);

// Vamos imprimir essa store com os reducers combinados para verificar o output:
console.log(store.getState())

//{
// meuReducer: {/_estado do meuReducer_/},
// meuOutroReducer: {/_estado do meuOutroReducer_/,}
//}

// Agora temos acesso a ambos reducers armazenados na store. Em reducers combinados, as actions podem ser escritas normalmente, pois todos eles escutam a action e só executam a mudança quando a action.type da ação é reconhecida. Ou seja, cada action é enviada para todos os reducers, independente se ele a utiliza ou não, cabendo ao switch administrar a execução da action, com base na propriedade type.
// Um detalhe importante é a forma que ocorre o acesso às informações do estado. Considerando que só existisse o meuReducer e que temos uma chave email nele, para acessar o valor dessa chave bastava utilizar state.email, já que o meuReducer era acessado diretamente. Agora, ao utilizar a combinação, é preciso especificar qual o reducer que gerencia este estado, então acessaríamos através de state.meuReducer.email. É como se cada reducer fosse uma gaveta de um arquivo (a store) e, para acessar os dados da gaveta, é preciso abri-la!
// Você pode conferir uma explicação mais detalhada neste, tópico da documentação sobre a combinação de múltiplos reducers. Guarde para ler depois!
// Outra funcionalidade bastante útil que iremos aprender hoje é o subscribe. Ele adiciona um listener que executará uma callback toda vez que uma action for despachada. Para ilustrar, vamos usar o subscribe junto com nossa store. No nosso exemplo, toda vez que a store sofrer alguma alteração, pegamos nosso estado e fazemos um console.log dele.