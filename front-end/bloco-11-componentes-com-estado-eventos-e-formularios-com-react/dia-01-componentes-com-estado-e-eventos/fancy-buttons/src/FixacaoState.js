import React from 'react';
import './App.css';

class FixacaoState extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);

    this.state = {
      clicksbutton: 0,
      clicksbutton2: 0,
      clicksbutton3: 0,
    };
  }

  handleClick() {
    this.setState((prevState) => ({
      clicksbutton: prevState.clicksbutton + 1,
    }));
  }
  
  handleClick2() {
    this.setState((prevState) => ({
      clicksbutton2: prevState.clicksbutton2 + 1,
    }));
  }
  
  handleClick3() {
    // A única coisa diferente é a desconstrução.
    // Apenas um método diferente de fazer a mesma coisa
    // do que foi feito nas funções anteriores.
    this.setState((prevState) => ({
      clicksbutton3: prevState.clicksbutton3 + 1,
    }));
  }
  
  render() {
    return (
      <div>
        <button onClick={ this.handleClick }>Botão 1 | Clicks: {this.state.clicksbutton}</button>
        <button onClick={ this.handleClick2 }>Botão 2 | Clicks: {this.state.clicksbutton2}</button>
        <button onClick={ this.handleClick3 }>Botão 3 | Clicks: {this.state.clicksbutton3}</button>
      </div>
    );
  }
}


export default FixacaoState;


// 5 - Agora você vai converter sua aplicação para uma que conta o número de cliques dado em cada botão! Primeiramente, defina um estado inicial para a contagem de cada botão.
// 🦜 Dica: Uma possibilidade é você definir três chaves, uma para cada botão!
// 6 - Agora, quando um botão for clicado, altere de forma assíncrona o estado deste botão de zero para um.
// 7 - Por fim, baseie-se no estado anterior ao atual para incrementar a contagem de cliques cada vez que um botão for clicado!