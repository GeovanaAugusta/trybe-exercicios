import React, { Component } from 'react';
import PersonalForm from './PersonalForm'
import ProfessionalForm from './ProfessionalForm'

class Form extends Component {
  render() {
    const { sendForm, resetForm, changeHandler, currentState, onBlurHandler } = this.props;

    return (
      <form>
        <PersonalForm
          changeHandler={ changeHandler }
          onBlurHandler= { onBlurHandler }
          currentState= { currentState }
        />
        <ProfessionalForm changeHandler={ changeHandler } />
        {/* Crie um botão que, ao ser clicado, monta uma <div> com o consolidado dos dados que foram inseridos no formulário. */}
        <input
            type="button"
            onClick={ sendForm }
            value="Enviar"
        />
        {/* 2 Crie um botão Limpar que limpa todos os campos do formulário e a <div> com seu currículo também. */}
        <input
          type="reset"
          onClick={ resetForm }
          value="Limpar"
        />
      </form>
    );
  }
}

export default Form;