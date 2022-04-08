import React from 'react';

class FixacaoAll extends React.Component {
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
    this.setState((prevState) => ({
      clicksbutton3: prevState.clicksbutton3 + 1,
    }));
  }

  chanceButtonColor(number) {
    return number % 2 === 0 ? 'green' : 'white';
  }

  render() {
    const { clicksbutton, clicksbutton2, clicksbutton3 } = this.state;
    return (
      <div>
        <button
          onClick={ this.handleClick }
          style={{ backgroundColor: this.chanceButtonColor(clicksbutton) }}
        >
          Botão 1 | Clicks: { clicksbutton }
        </button>
        <button
          onClick={ this.handleClick2 }
          style={{ backgroundColor: this.chanceButtonColor(clicksbutton2) }}
        >
          Botão 2 | Clicks: { clicksbutton2 }
        </button>
        <button
          onClick={ this.handleClick3 }
          style={{ backgroundColor: this.chanceButtonColor(clicksbutton3) }}
        >
          Botão 3 | Clicks: { clicksbutton3 }
        </button>
      </div>
    );
  }
}

export default FixacaoAll;


// 8 -Defina uma lógica que estabeleça que, quando o número de cliques no botão for par, ele deve ser verde.
// 9 - A cor atual do botão deve ser impressa num console.log() de dentro da função do evento que lida com o clique. Faça isso acontecer!