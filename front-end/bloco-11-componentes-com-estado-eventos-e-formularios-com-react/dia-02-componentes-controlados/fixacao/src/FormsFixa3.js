import React from "react";
import Nome from "./Nome";
import Email from "./Email";

class FormFixa3 extends React.Component {
  constructor() {
    super()

    this.handleChange1 = this.handleChange1.bind(this);

    this.state = {
      nome: '',
      email: '',
      textarea: '',
      select: '',
      checkbox: '',
    }
  }

  handleChange1(event) {
    const { name } = event.target;
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
  
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <Nome value={this.state.nome} handleChange1={this.handleChange1}/>

        <Email value={this.state.email} handleChange1={this.handleChange1}/>

        <label>          
          <textarea
          onChange={this.handleChange1}
          name='textarea'
          value={this.state.textarea}>
            Fale sobre você
          </textarea>
        </label>

        <label>
          Cor Favorita
          <select
           value={this.state.select} 
           onChange={this.handleChange1} name='select'>
            <option value="option">Option</option>
            <option value="option2">Option2</option>
            <option value="option3">Option3</option>
          </select>
        </label>

        <label>
        <input type="file" /> 
        {/* Como seu valor é de somente leitura, ele é um componente não controlado do React */}
        </label>

        <label>
          <input
            name="checkbox"
            type="checkbox"
            checked={this.state.checkbox}
            onChange={this.handleChange1} />
             Permito enviar meus dados
        </label>     
      </div>
      
    )
  }

}

export default FormFixa3;

// 7 - Faça dois de seus campos serem componentes filhos do seu componente de formulário. Garanta que seu estado ainda pertence ao componente pai.
// 8 - Faça duas validações em um desses componentes filhos e uma em um outro.
// 9 - Crie, no estado do componente pai, um campo formularioComErros que deve ser true caso algum desses componentes tenha erros e false caso contrário.
// 🦜 Dica: Se algum dos componentes transmitir true para a função que fará o handle dos erros, qual valor deve ser armazenado no Estado ?