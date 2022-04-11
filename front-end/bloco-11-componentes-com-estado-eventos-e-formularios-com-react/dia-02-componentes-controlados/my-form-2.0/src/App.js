import React from "react";
import "./App.css";
import Form from "./Form";
import FormatDiv from "./FormatDiv";

const initialState = {
  name: "",
  email: "",
  cpf: "",
  address: "",
  city: "",
  countryState: "",
  residenceType: "",
  resume: "",
  office: "",
  description: "",
  submitted: false,
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  changeHandler = (event) => {
    let { name, value } = event.target;

    // Todos os caracteres devem ser transformados para UPPER CASE assim que forem digitados.
    if (name === "name") value = event.target.value.toUpperCase();

    // 727 https://stackoverflow.com/questions/4374822/remove-all-special-characters-with-regexp
    if (name === "address") value = value.replace(/[^\w\s]/gi, "");

    // Passei pra number o cpf
    if (name === 'cpf') value = parseInt(value); 

    this.updateState(name, value);
  };

  blurHandler = (event) => {
    let { name, value } = event.target;

    // Ao remover o foco desse campo (evento onBlur ), verificar se o nome da cidade começa com números. Caso COMECE, limpar o campo.
    // 0 https://stackoverflow.com/questions/6031744/javascript-regex-to-check-if-a-value-begins-with-a-number-followed-by-anything-e
    //34  https://stackoverflow.com/questions/39736188/check-if-string-starts-with-a-number
    if (name === "city") value = value.match(/^\d/) ? "" : value;
    this.updateState(name, value);
  };

    // 2 Crie um botão Limpar que limpa todos os campos do formulário e a <div> com seu currículo também.
    resetForm = () => { this.setState(initialState) };

    // 2 Crie um botão que, ao ser clicado, monta uma <div> com o consolidado dos dados que foram inseridos no formulário.
    sendForm = (event) => { 
      event.preventDefault(); 
      this.setState({ submitted: true })
    };

  updateState(name, value) {
    this.setState(() => ({
      [name]: value,
    }));
  }

  render() {
    const { submitted } = this.state;
    return (
      <div className="App">
        <Form
          changeHandler={this.changeHandler}
          blurHandler={this.blurHandler}
          sendForm={this.sendForm}
          resetForm={this.resetForm}
        />
        { submitted && <FormatDiv currentState={ this.state } /> }
      </div>
    );
  }
}

export default App;
