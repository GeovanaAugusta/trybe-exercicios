import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import FormError from './FormError';
import FormDataDisplay from './FormDataDisplay';

// this. state inicial
const initialState = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  countryState: '',
  addressType: '',
  resume: '',
  role: '',
  roleDescription: '',
  formError: {},
  submitted: false,
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  changeHandler = (event) => {
    let { name, value } = event.target;
    
    // Todos os caracteres devem ser transformados para UPPER CASE assim que forem digitados.
    if (name === 'name') value = value.toUpperCase();
    // 1 Remover qualquer caracter especial que seja digitado
    if (name === 'address') value = this.validateAddress(value);

    this.updateState(name, value);
  }

  onBlurHandler = event => {
    let { name, value } = event.target;

    // 1 Ao remover o foco desse campo (evento onBlur ), verificar se o nome da cidade começa com números. Caso comece, limpar o campo.
    if (name === 'city') value = value.match(/^\d/) ? '' : value; // typeof não funcionou

    this.updateState(name, value);
  }

  updateState(name, value) {
    this.setState((state) => ({
      [name]: value,
      formError: {
        ...state.formError,
        [name]: this.validateField(name, value)
      }
    }));
  }

// 1 Remover qualquer caracter especial que seja digitado
// 727 https://stackoverflow.com/questions/4374822/remove-all-special-characters-with-regexp
  validateAddress = (address) => address.replace(/[^\w\s]/gi, '')

  handleSubmit = event => {
    event.preventDefault();
  }

  validateField(fieldName, value) {
    switch (fieldName) {
      case 'email':
        // Utilize regex para validar o campo email.O formato esperado é: trybe@gmail.com .
        const isValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2})$/i)
        return isValid ? '' : ' is invalid';
      default:
        break;
    }
    return '';
  }

  // 2 Crie um botão Limpar que limpa todos os campos do formulário e a <div> com seu currículo também.
  resetForm = () => { this.setState(initialState) };

  // 2 Crie um botão que, ao ser clicado, monta uma <div> com o consolidado dos dados que foram inseridos no formulário.
  sendForm = () => { this.setState({ submitted: true }) };

  render() {
    const { submitted } = this.state;

    return (
      <main>
        <Form
          sendForm={this.sendForm}
          resetForm={this.resetForm}
          changeHandler={this.changeHandler}
          currentState={ this.state }
          onBlurHandler={ this.onBlurHandler }
        />
        <div className="container">
          <FormError formError={this.state.formError} />
        </div>
        { submitted && <FormDataDisplay currentState={ this.state } /> }
      </main>
    );
  }
}

export default App;