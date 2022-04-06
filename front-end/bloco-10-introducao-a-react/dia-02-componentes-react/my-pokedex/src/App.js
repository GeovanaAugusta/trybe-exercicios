import React from 'react';
import './App.css';
import pokemons from './data';
//Import do json criado com os pokemons e seus dados.
import Pokedex from './Pokedex';

class App extends React.Component {
render() {
  return (
    <div className="App">
      <h1 className='poke'> Pokedex </h1>
      <Pokedex pokemons={pokemons} />
    </div>
  );
}

}

export default App;