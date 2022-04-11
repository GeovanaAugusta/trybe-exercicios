import React, { Component } from "react";
import PropTypes from "prop-types";

class FormatDiv extends Component {
  render() {
    const {
      currentState: {
        name,
        email,
        cpf,
        address,
        city,
        countryState,
        residenceType,
        resume,
        office,
        description,
      },
    } = this.props;
    return (
      <div>
        <h2>Dados enviados</h2>
        <h3>Pessoal</h3>
        <div> Name: {name}</div>
        <div> Email: {email}</div>
        <div> CPF: {cpf}</div>
        <div> Endereço: {address}</div>
        <div> Cidade: {city}</div>
        <div> Estado: {countryState}</div>
        <div> Tipo de residência: {residenceType}</div>
        <h3>Profissional</h3>
        <div> Currículo: {resume}</div>
        <div> Cargo: {office}</div>
        <div> Descrição do cargo: {description}</div>
      </div>
    );
  }
}

export default FormatDiv;

FormatDiv.propTypes = {
  currentState: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    cpf: PropTypes.number.isRequired,
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    countryState: PropTypes.string.isRequired,
    residenceType: PropTypes.string.isRequired,
    resume: PropTypes.string.isRequired,
    office: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
};
