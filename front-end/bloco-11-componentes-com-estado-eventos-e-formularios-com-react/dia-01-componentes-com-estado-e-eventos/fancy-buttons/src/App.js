import './App.css';
import React from 'react';
import Fixacao from './FixacaoBindThis';
import FixacaoThisBind from './FIxacaoThisBind';
import FixacaoState from './FixacaoState';
import FixacaoAll from './FixacaoAll.js';

function handleClick() {
  console.log('clicou')
}

function handleClick1() {
  console.log('clicou1')
}

function handleClick2() {
  console.log('clicou2')
}

class App extends React.Component {
  render () {
  return (
    <div className="App">
      <button onClick={handleClick}>Botão 1</button>
      <button onClick={handleClick1}>Botão 2</button>
      <button onClick={handleClick2}>Botão 3</button>
      <Fixacao />
      <FixacaoThisBind />
      <FixacaoState />
      <FixacaoAll />
    </div>
  );
}
}

export default App;

// Para fixar
// 1 - Crie uma aplicação React com npx create-react-app fancy-buttons . Altere o componente App.js para que seja um componente de classe e contenha um botão associado a um evento que imprime um texto qualquer via console.log() . Não precisa se preocupar com a sintaxe correta para funções de eventos por enquanto!!
// 2 - Faça com que sua aplicação exiba três botões lado a lado com textos diferentes. Cada botão clicado deve acionar um evento diferente, cada um escrevendo algo diferente no console do navegador via console.log() .
