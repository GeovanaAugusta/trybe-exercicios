import React, { Component } from 'react'

export class Cadastro extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      sehha: '',
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick = (event) => {
    const { history } = this.props;

    // const { email, senha } = this.state;

    history.push('/clientesCadastrados');

    event.preventDefault();
  }
  
  render() {
    return (
      <div>
        <h1>Cadastro</h1>

        <label htmlFor='nome'>
          Nome
          <input
          id='nome'
          type='text'
          onChange={ this.handleChange }
          name='name'
          />
        </label>

        <label htmlFor='idade'>
          Idade
          <input
          id='idade'
          type='number'
          onChange={ this.handleChange }
          name='age'
          />
        </label>

        <label htmlFor='email'>
          Email
          <input
          id='email'
          type='email'
          onChange={ this.handleChange }
          name='email'
          />
        </label>

        <button 
        type='button'
        onClick={ this.handleClick }
        >
          Entrar
          </button> 

      </div>
    )
  }
}

export default Cadastro