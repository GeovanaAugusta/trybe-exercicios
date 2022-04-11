import React, { Component } from 'react';

class ProfessionalFormForm extends Component {
  render() {
    const { changeHandler } = this.props;
    return (
      <fieldset>
        <legend>Dados profissionais:</legend>
        <div className="container">
          Resumo do currículo:
          <textarea
            name="resume"
            // 2 Limite caracteres
            maxLength="1000"
            required
            onChange={changeHandler}
          />
        </div>
        <div className="container">
          Cargo:
            <input
              type="text"
              name="role"
              // 2 Limite caracteres
              maxLength="40"
              required
              onChange={changeHandler}
              // 2 Quando o mouse passar por cima deste campo (evento onMouseEnter ), exibir um alerta dizendo 'Preencha com cuidado esta informação.'. Exiba essa mensagem apenas uma vez.
              onMouseEnter={() => {
                alert('Preencha com cuidado esta informação.');
              }}
            />
        </div>
        <div className="container">
          Descrição do cargo:
          <textarea
            name="roleDescription"
            // 2 Limite caracteres
            maxLength="500"
            onChange={changeHandler}
          />
        </div>
      </fieldset>
    );
  }
}

export default ProfessionalFormForm;