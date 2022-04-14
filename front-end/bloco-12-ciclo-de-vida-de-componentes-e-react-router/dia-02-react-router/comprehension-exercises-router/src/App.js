import React, { Component } from 'react';
import Home from './components/Home';
import { BrowserRouter, Link, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import About from './components/About';
import Users from './components/Users';
import StrictAccess from './components/StrictAccess';

class App extends Component {
  render() {
    return (
     
      <div> 
         
        {/* 1 */}
       
      <BrowserRouter>
       {/*10  */}
      <Switch> 
{/* 2, 3, 4 */}
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      {/* 8 - por props*/}
          <Route
          exact
          path="/users"
          render={ (props) => <Users { ...props } greetingsMessage="Good Morning" /> }
        />
        {/* 9 - por param */}
        <Route path="/users/:id" component={ Users } />
        {/* 13 */}
        <Route
      path="/strict-access"
      render={ () => (
        <StrictAccess user={ { username: 'joao', password: '1234' } } />
      )}
    />
      {/* 6 */}
      </Switch>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/users">Users</Link>
      {/* 12 */}
      <Link to="/strict-access">Strict Access</Link>
      </BrowserRouter>

      </div>
    );
  }
}

export default App;

// Exercício 1
// Torne a aplicação navegável, encapsulando o que é retornado pelo App dentro do componente BrowserRouter.

// Exercício 2
// Crie uma rota para o componente Home, utilizando um Route que mapeia o caminho de URL "/" para Home

// Exercício 3
// Adicione uma rota que mapeie o caminho de URL "/about" para o componente About. Acesse http://localhost:3000/about para ver se o componente About foi renderizado!

// Exercício 4
// Legal, o componente About foi renderizado, mas o componente Home foi também, o que não era desejado para o nosso caso. sob Altere a forma como a correspondência de caminho da URL está sendo feita para renderizar Home, de modo que Home somente seja renderizado se o caminho da URL for exatamente igual a "/".

// Exercício 5
// Por fim, adicione uma rota que mapeie o caminho de URL "/users" para o componente Users. Acesse http://localhost:3000/users para ver se somente o componente Users foi renderizado.

// Exercício 6
// Agora que as rotas, adicione dentro de BrowserRouter uma lista contendo 3 links:

// um link que aponte para o caminho de URL "/" contendo o texto Home;

// um link que aponte para o caminho de URL "/about" contendo o texto About;

// um link que aponte para o caminho de URL "/users" contendo o texto Users.

// OBS: averigue que os links estão atualizando a URL do seu browser quando são clicados.

// Exercício 8
// No componente App há uma rota que renderiza o componente Users. Altere a forma como ela renderiza o componente Users, passando para ele a prop greetingsMessage com o valor igual a "Good Morning". Lembre-se de usar a prop correta no Route!

// Exercício 9
// Agora, para fixar uso de URL com parâmetros, altere a rota, definindo o parâmetro chamado id. 

// Daqui para frente, utilize o componente Switch:

// Exercício 10
// No componente App, você deve possuir 3 rotas: uma para renderizar o componente Home, outra para renderizar About, e outra para renderizar Users, sendo que a última faz uso de parâmetro de URL. Encapsule essas 3 rotas em um componente Switch e ordene as rotas do mais específico para o mais genérico, começando de cima.

// Exercício 12
// Adicione no componente App um link que aponte para o caminho de URL "/strict-access" contendo o texto Strict Access;

// Exercício 13
// Adicione no componente App uma rota que mapeie o caminho de URL "/strict-access" para o componente StrictAccess. Para poder testar o fluxo de autenticação, passe para a prop user de StrictAccess diferentes valores para as propriedades username e password.
