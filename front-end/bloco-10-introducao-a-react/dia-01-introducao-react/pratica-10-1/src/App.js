
    import React from 'react';
    import './App.css';

    const Task = (value) => {
      return (
        <li key={value}>{value}</li>
      );
    }

    const tasks = ['Acordar;', 'Escovar os dentes;', 'Exercitar;', 'Estudar.'];

    class App extends React.Component {
      render() {
        return (
          <ul>{ tasks.map(element => Task(element)) }</ul>
        );
      }
    }

    export default App;