import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    console.log("construtor");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }

  render() {
    console.log("render");
    return (
      <div>
        <p>Contador</p>
        <button
          onClick={() => this.setState((state) => ({ counter: state.counter + 1 }))}
        >
          Soma
        </button>
        <p>{this.state.counter}</p>
      </div>
    );
  }
}

export default Counter;

// Atente-se para a ordem de chamada dos métodos. As mensagens refletem a ordem de execução dos métodos de ciclo de vida do componente.
// Os métodos shouldComponentUpdate e componentDidUpdate não apareceram no console, pois não houve atualização. Caso o botão Soma seja clicado, teremos mais mensagens no console:
// Note que, durante o processo de atualização, o método render é chamado novamente. Isso acontece porque, quando se atualiza uma props ou estado, o React "pede" que o componente seja renderizado no DOM. Como apresentamos acima, caso seja válido, podemos impedir essa renderização retornando false com o método shouldComponentUpdate 