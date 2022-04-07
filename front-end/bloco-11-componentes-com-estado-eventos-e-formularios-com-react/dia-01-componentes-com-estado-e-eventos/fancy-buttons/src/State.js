import React from 'react';
import './App.css';

class State extends React.Component {
  constructor() {
    super()
     /* Para definir um estado inicial ao componente, a ser definido
    no momento em que o componente for colocado na tela, faça uma atribuição
    de um objeto à chave `state` do `this`, ou seja, ao `this.state`*/
    this.state = {
      numeroDeCliques: 0
    }
    // Sua lógica extra vai aqui! O parâmetro `props` é opcional, para você acessar as props diretamente no construtor
    // A função abaixo vincula "manualmente" o `this` à nossa função
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    /* Passando uma callback à função setState, que recebe de parâmetros
    o estado anterior e as props do componente, você garante que as atualizações
    do estado acontecerão uma depois da outra! */
     /* Você **NUNCA** deve fazer atribuições diretamente a `this.state`. Deve,
    ao invés disso, SEMPRE utilizar a função `this.setState(novoEstado)` do
    React*/
    //  NUNCA deve atribuir valores ao estado diretamente com this.state 
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
  }

  render() {
  /* No React, precisamos dizer explicitamente que queremos uma função da nossa classe através da sintaxe `this.minhaFuncao` para usá-la num evento */
    return <button onClick={this.handleClick}>{this.state.numeroDeCliques}</button>
  }
}

export default State;

// Para chamar, no elemento, um evento passando um parâmetro, você deveria trocar a sintaxe <button onClick{this.minhaFuncao} ...> por <button onClick={() => this.minhaFuncao('meu parametro')} . Basicamente, substitua a função do evento por uma chamada à mesma feita via callback! 