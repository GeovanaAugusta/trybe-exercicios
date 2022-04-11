import React from "react";
import PersonalForm from "./PersonalForm";
import ProfessionalForm from "./ProfessionalForm";
import PropTypes from "prop-types";

class Form extends React.Component {
  render() {
    const { changeHandler, blurHandler, sendForm, resetForm } = this.props;
    return (
      <form>
        <PersonalForm changeHandler={changeHandler} blurHandler={blurHandler} />
        <ProfessionalForm
          changeHandler={changeHandler}
          sendForm={sendForm}
          resetForm={resetForm}
        />

<button type="button" onClick={sendForm}>
          Enviar
        </button>

        <button type="reset" onClick={resetForm}>
          Apagar
        </button>

      </form>
    );
  }
}

export default Form;

Form.propTypes = {
  changeHandler: PropTypes.func.isRequired,
  blurHandler: PropTypes.func.isRequired,
  sendForm:PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
};
