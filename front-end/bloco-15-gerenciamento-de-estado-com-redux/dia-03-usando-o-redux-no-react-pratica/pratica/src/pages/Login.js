import React, { Component } from 'react'

export class Login extends Component {
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
        <h1>Login</h1>

        <label htmlFor='email'>
          Email
          <input
          id='email'
          type='email'
          onChange={ this.handleChange }
          name='email'
          />
        </label>

        <label htmlFor='senha'>
          Senha
          <input
          id='senha'
          type='password'
          onChange={ this.handleChange }
          name='senha'
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

export default Login