import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class StrictAccess extends Component {
  render() {
    const {  username, password  } = this.props.user;
    return (
      <div>
      <h2>StrictAccess</h2>
      { username === "joao" && password === 1234 ? 
      <p> Welcome { username } </p>
     : alert("Access denied") &&
     <Redirect to="/" /> }
    </div>
    )
  }

}

export default StrictAccess;

// Para os próximos exercícios, utilize o componente Redirect:

// Exercício 11
// Adicione, no diretório src, um componente chamado StrictAccess. Como o próprio nome diz, esse componente é de acesso restrito, e ele deve receber um objeto user como props. Se username e password de user for "joao" e "1234", respectivamente, o componente StrictAccess renderiza um parágrafo que diz "Welcome joao!". Caso username ou password não sejam os valores esperados, o componente precisa gerar um alerta dizendo Access denied e redirecionar quem usa sua aplicação para a página principal.