import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { deleteRegister } from '../redux/actions/action';

export class ClientesCadastrados extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ordened: false,
    };
  }

  generateRegisters = array =>
    array.map(register => (
      <div key={register.email}>
        <p>Nome: {register.name}</p>
        <p>Idade: {register.age}</p>
        <p>Email: {register.email}</p>
        <button onClick={() => this.props.delete(register)}>X</button>
      </div>
    ));

  orderRegisters = () => {
    const ordened = [...this.props.registers];
    ordened.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();

      let comparison = 0;
      if (nameA > nameB) {
        comparison = 1;
      } else if (nameA < nameB) {
        comparison = -1;
      }
      return comparison;
    });
    return ordened;
  };

  render() {

    const { registers, userLogin } = this.props;
    const { ordened } = this.state;
  
    if (!userLogin.email) return <div>Login não efetuado!</div>;
    if (registers.length < 1)
      return (
        <div>
          <div>Nenhum cliente cadastrado</div>
          <Link to="/cadastro">Cadastre agora!</Link>
        </div>
      );
    return (
      <div>
        <Link to="/cadastro">Cadastre outros!</Link>
        <button
          onClick={() => this.setState(state => ({ ordened: !state.ordened }))}>
          Ordenar
        </button>
        <div>
          {this.generateRegisters(ordened ? this.orderRegisters() : registers)}
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  registers: state.registerReducer,
  userLogin: state.loginReducer});


const mapDispatchToProps = (dispatch) => ({
  delete: e => dispatch(deleteRegister(e))});

export default connect(mapStateToProps, mapDispatchToProps)(ClientesCadastrados);
// Só o primeiro param que é obrigatório de uma função, podendo usar sem o null nesse caso