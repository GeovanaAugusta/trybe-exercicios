import React from "react";
import PropTypes from "prop-types";

const states = [
  "Acre",
  "Alagoas",
  "Amapá",
  "Amazonas",
  "Bahia",
  "Ceará",
  "Distrito Federal",
  "Espírito Santo",
  "Goiás",
  "Maranhão",
  "Mato Grosso",
  "Mato Grosso do Sul",
  "Minas Gerais",
  "Pará",
  "Paraíba",
  "Paraná",
  "Pernambuco",
  "Piauí",
  "Rio de Janeiro",
  "Rio Grande do Norte",
  "Rio Grande do Sul",
  "Rondônia",
  "Roraima",
  "Santa Catarina",
  "São Paulo",
  "Sergipe",
  "Tocantins",
];

class PersonalForm extends React.Component {
  render() {
    const { changeHandler, blurHandler } = this.props;
    return (
      <fieldset>
        <label htmlFor="name"> Nome: </label>
        <input
          id="name"
          type="text"
          name="name"
          maxLength="40"
          required
          onChange={changeHandler}
        ></input>

        <br></br>

        <label htmlFor="email"> Email: </label>
        <input
          id="email"
          name="email"
          type="text"
          maxLength="50"
          required
          onChange={changeHandler}
        ></input>

        <br></br>

        <label htmlFor="cpf"> CPF: </label>
        <input
          id="cpf"
          name="cpf"
          type="text"
          maxLength="11"
          required
          onChange={changeHandler}
        ></input>

        <br></br>

        <label htmlFor="address"> Endereço: </label>
        <input
          id="address"
          name="address"
          type="text"
          maxLength="200"
          required
          onChange={changeHandler}
        ></input>

        <br></br>

        <label htmlFor="city"> Cidade: </label>
        <input
          id="city"
          name="city"
          type="text"
          maxLength="28"
          required
          onBlur={blurHandler}
          onChange={changeHandler}
        ></input>

        <br></br>

        {/* O controle select (combobox)  */}

        <label htmlFor="countryState"> Estado: </label>
        <select
          name="countryState"
          required
          defaultValue=""
          onChange={changeHandler}
        >
          {/* Array de cidades, ao invés de um a um */}
          <option element="">Selecione</option>
          {states.map((element, index) => (
            <option key={index}>{element}</option>
          ))}
        </select>

        <br></br>

        <label htmlFor="option">Casa</label>

        <input
          id="option"
          type="radio"
          name="residenceType"
          value="Casa"
          required
          onChange={changeHandler}
        ></input>

        <label htmlFor="option2">Apartamento</label>
        <input
          id="option2"
          name="residenceType"
          value="Apartamento"
          onChange={changeHandler}
          type="radio"
          required
        ></input>
      </fieldset>
    );
  }
}

export default PersonalForm;

PersonalForm.propTypes = {
  changeHandler: PropTypes.func.isRequired,
  blurHandler: PropTypes.func.isRequired,
};
