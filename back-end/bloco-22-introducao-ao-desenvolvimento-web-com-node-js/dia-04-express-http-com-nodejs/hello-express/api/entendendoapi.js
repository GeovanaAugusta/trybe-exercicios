// Para dar mais visibilidade, imagine um componente React que precisa exibir essa lista. Ele ficaria mais ou menos

class receitasList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/recipes')
      .then(response => response.json())
      .then((recipes) => this.setState(
        {
          recipes,
          isLoading: false,
        },
      ));
  }

  render() {
    const { recipes, isLoading } = this.state;

    return (
      <div>
        <div>
          {isLoading && "Loading..."}
          <div className='card-group'>
            {recipes.map((recipe) => (
              <div key={recipe.id}>
                <h1>{recipe.name}</h1>
                <span>Preço: {recipe.price}</span>
                <span>Tempo de preparo: {recipe.waitTime}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

// Para uma aplicação back-end receber requisições de uma aplicação front-end, ou qualquer outra aplicação, é preciso instalar um módulo que libera o acesso da nossa API para outras aplicações. Para isso basta instalar um módulo chamado cors usando npm i cors e adicionar as seguintes linhas no seu arquivo index.js.

const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());