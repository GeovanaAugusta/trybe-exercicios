import React from "react";

class FormFixa2 extends React.Component {
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
        <fieldset>
        <label for="name">Nome</label>
          <input
            onChange={this.handleChange1}
            name='nome'
            type='text'
            id='name'
            value={this.state.nome}
          />
          
          </fieldset>
          <fieldset>
          <label for="email">Email</label>
          <input
          onChange={this.handleChange1}
          name='email'
          value={this.state.email}
          id='email'
          />
          </fieldset>

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

export default FormFixa2;

// 3 - Faça todos os seus elementos componentes do formulário ficarem 100% controlados. Faça um event handler genérico para lidar com eles.
// 4 - Acrescente no seu formulário um input do tipo checkbox e garanta que seu event handler esteja tratando este caso corretamente.
// 5 - Busque na documentação de React acerca de formulários (primeiro link da seção de Recursos Adicionais!) como se deve adicionar um input para arquivos . Acrescente um ao seu formulário.
// 6 - Encapsule alguns dos seus campos num fieldset . Entenda como ele funciona lendo a documentação .