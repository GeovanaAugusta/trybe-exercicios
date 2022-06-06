import React, {  useState } from "react";
import Todo from './Todo';
import useArray from "./useArray";

const Ex2 = () => {
  const [tasks, setTasks] = useState('');
  const [listOfTasks, setListOfTasks] = useArray()
  console.log(listOfTasks);

const handleChange = ({ target: { value }  }) => {
  setTasks(value)
}

const handleClick = () => {
  setListOfTasks(tasks)
  setTasks('')
  
}

return (
  <div>
    <h1>Ex2</h1>
    <label htmlFor="task"> 
    <input value={tasks} id="task" type="text" placeholder="Digite sua tarefa"  onChange={handleChange}></input>
    </label>
    <button type="button" onClick={handleClick}>Adicionar tarefa</button>
    <p>{tasks}</p>
      <Todo tasks={listOfTasks} />
  </div>
  )
}

export default Ex2;

// Agora é hora de sentir o poder dos Hooks customizados na pele! Faça uma Todo list simples usando um hook customizado useArray para manipular os dados guardados na lista.