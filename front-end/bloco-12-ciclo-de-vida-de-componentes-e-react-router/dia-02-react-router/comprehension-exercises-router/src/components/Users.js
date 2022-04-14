import React, { Component } from 'react';

// 7

class Users extends Component {
  render() {
    console.log(this.props)
    const { greetingsMessage, match: { params: { id } } } = this.props;
    console.log(id)
    return (
      <div>
        <h2>Users</h2>
        
        <p> { greetingsMessage }, {id }My awesome Users component </p>
        {/* <p>  { `${greetingsMessage} User ${id}` }, this is my awesome Users </p> component */}
        {/* <p> { id } </p>   */}
      </div>
 
    );
  }
};

export default Users;


// import React, { Component } from 'react';

// class Users extends Component {
//   render() {
//     const {
//       greetingMessage = 'Hi There',
//       match: { params: { id }
//     } } = this.props;

//     return (
//       <main>
//         <h2> Users </h2>
//         <p>
//         { `${greetingMessage} User ${id}` }, this is my awesome Users component
//         </p>
//       </main>
//     );
//   }
// }

// export default Users;


// Exercício 7
// Altere o componente Users para poder fazer o exercício a seguir.

// Exercício 9
// Agora, para fixar uso de URL com parâmetros, altere a rota, definindo o parâmetro chamado id (App). Depois, altere o componente Users, de modo que mostre no parágrafo o valor recebido para o parâmetro id. Teste se está funcionando invocando as urls localhost:3000/users/10, localhost:3000/users/11 e localhost:3000/users/100, por exemplo.


// Exercício 12
// Adicione no componente App um link que aponte para o caminho de URL "/strict-access" contendo o texto Strict Access;

// Exercício 13
// Adicione no componente App uma rota que mapeie o caminho de URL "/strict-access" para o componente StrictAccess. Para poder testar o fluxo de autenticação, passe para a prop user de StrictAccess diferentes valores para as propriedades username e password.
