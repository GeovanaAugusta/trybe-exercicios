import React from "react";

class FormFixa extends React.Component {
  constructor() {
    super()

    this.handleChange1 = this.handleChange1.bind(this);

    this.state = {
      nome: '',
    }
  }

  handleChange1(event) {
    this.setState({
      nome: event.target.value,
    })
  }

  render() {
    return (
      <form>
        <label>
          <select>
            <option value="option">Option</option>
            <option value="option2">Option2</option>
            <option value="option3">Option3</option>
          </select>
        </label>

        <label>
          Nome
          <textarea
            onChange={this.handleChange1}
            name='nome'
            value={this.state.nome}
          />
        </label>

        <label>
          Email
          <input></input>
        </label>

        <label>
          Oi
          <textarea>
            Digite algo
          </textarea>
        </label>

      </form>
    )
  }

}

export default FormFixa;

// Para fixar
// 1 - Crie um formulário com um campo select , dois inputs de tipo diferente, uma textarea e faça de um deles um componente controlado, ou seja, elementos do formulário controlados pelo Estado
// 2 - Baixe a React Developer Tools e veja, nela, o dado inserido no elemento controlado sendo salvo no Estado.
