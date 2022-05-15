import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import ClientesCadastrados from './pages/ClientesCadastrados';
import Cadastro from './pages/Cadastro';
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/login" component={ Login } />
        <Route path="/clientesCadastrados" component={ ClientesCadastrados } />
        <Route path="/cadastro" component={ Cadastro } />
      </Switch>
    </div>
  );
}

export default App;
