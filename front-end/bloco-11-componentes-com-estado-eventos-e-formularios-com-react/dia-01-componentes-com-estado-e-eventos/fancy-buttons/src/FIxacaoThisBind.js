import React from 'react';
import './App.css';

class FixacaoThisBind extends React.Component {
  constructor() {
    // A função `super()` é chamada para garantir que a lógica interna do React rode **antes** da sua. Se não for assim, o código não funcionará
    super()
    // Sua lógica extra vai aqui! O parâmetro `props` é opcional, para você acessar as props diretamente no construtor
    // A função abaixo vincula "manualmente" o `this` à nossa função
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    /* Agora esse log retorna o objeto `this`, já acessível para nossa função!
    Com isso, podemos acessar as `props`, estado do componente (ainda vamos ver como!)
    e tudo o mais daqui de dentro */
     console.log('Clicou!')
  }

  render() {
 /* No React, precisamos dizer explicitamente que queremos uma função da nossa classe através da sintaxe `this.minhaFuncao` para usá-la num evento */
    return (
    <div> 
    <button onClick={this.handleClick}>Botão Certo 1</button>
    <button onClick={this.handleClick}>Botão Certo 2</button>
    <button onClick={this.handleClick}>Botão Certo 3</button>
    </div>
    )
  }
}

export default FixacaoThisBind;

// Para fixar
// 3 - Declare dentro da classe do seu componente dos exercícios de fixação acima a função que lida com o evento que antes era lidado por uma função do lado de fora da classe!
// 4 - Garanta acesso ao objeto this na função que você declarou.

// Como fazer com que tenha textos diferentes? Funções diferentes?