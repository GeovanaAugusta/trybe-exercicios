import React from "react";
import PropTypes from "prop-types";

class ProfessionalForm extends React.Component {
  render() {
    const { changeHandler } = this.props;

    return (
      <fieldset>
        <label htmlFor="resume">Resumo do currículo</label>
        <textarea
          id="resume"
          name="resume"
          onChange={changeHandler}
          maxLength="1000"
          required
        />

        <br></br>

        <label htmlFor="office">Cargo</label>
        <textarea
          id="office"
          name="office"
          onChange={changeHandler}
          maxLength="40"
          required
          onMouseEnter={() => {
            alert("Preencha com cuidado esta informação.");
          }}
        />

        <br></br>

        <label htmlFor="description">Descrição do cargo</label>
        <textarea
          id="description"
          name="description"
          onChange={changeHandler}
          maxLength="500"
          required
        />

        <br></br>
        {/* Crie um botão que, ao ser clicado, monta uma <div> com o consolidado dos dados que foram inseridos no formulário.  */}
      </fieldset>
    );
  }
}

export default ProfessionalForm;

ProfessionalForm.propTypes = {
  changeHandler: PropTypes.func.isRequired,
};
