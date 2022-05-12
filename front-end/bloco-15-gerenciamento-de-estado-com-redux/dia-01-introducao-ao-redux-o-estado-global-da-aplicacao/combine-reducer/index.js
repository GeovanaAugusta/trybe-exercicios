// Arquivo index.js

// O Redux já possui uma função para resolver isso, a combineReducers(). Essa função recebe um objeto como parâmetro contendo cada um dos seus reducers como elementos, por exemplo:

import { combineReducers } from 'redux';
import meuReducer from './meuReducer';
import meuOutroReducer from './meuOutroReducer';

const reducerCombinado = combineReducers({
meuReducer,
meuOutroReducer});

export default reducerCombinado;