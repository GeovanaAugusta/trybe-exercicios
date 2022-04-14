import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './components/Profile';
import Connections from './components/Connections';

class App extends React.Component {
  constructor() {
    // O método que você procura é o primeiro método a ser executado. Ele é executado uma única vez quando o componente é inicializado e guarda os estados iniciais do componente. Recebe props como argumento e é onde conectamos as funções ao componente (bind).
    super();

    this.state = {
      showProfile: true,
    };
    this.changeProfile = this.changeProfile.bind(this);
  }

  // Não use o setState dentro do render(), isso pode ocasionar loops infinitos, porque o metódo render é chamado quando o state é atualizado, então ao colocar o setState dentro do render, ele irá atualizar o state e chamar o render, atualizar o state novamente e chamar o render e por aí vai, o metódo render deve ser puro. Uma função pura é aquela que ela não pode ser alterada, independente do que entra nela ela deve permanecer igual. Se você quer inicializar váriaveis assim que a página for montada, utilize o componentDidMount()

  changeProfile() {
    const { showProfile } = this.state;

    this.setState({ showProfile: !showProfile });
  }

  render() {
    const { showProfile } = this.state;
    return (
      <div className="gitNetwork d-flex flex-column justify-content-center">
        { showProfile ? <Profile /> : null }
        <div className="central d-flex justify-content-center">
          <button
            className="btn btn-dark align-self-center"
            type="button"
            onClick={ this.changeProfile }
          >
            Mostrar / Ocultar Perfil
          </button>
        </div>
        <Connections />
      </div>
    );
  }
}

export default App;
