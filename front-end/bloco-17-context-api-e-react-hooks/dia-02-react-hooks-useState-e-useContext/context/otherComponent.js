// Com o setup concluído, podemos utilizar o estado criado no Provider em qualquer componente que for necessário utilizando o useContext. Pra isso, precisamos importar o Context e o useContext:

import React, { useContext } from 'react';
import AppContext from '../utils/AppContext';

const ComponenteX = () => {
  const { stateA, setStateA, stateB } = useContext(AppContext);

  return (
    <div>
      <p>{stateA}</p>
      <p>{stateB}</p>
      <button onClick={() => setStateA("newState")}>Click</button>
    </div>
  );
};

export default ComponenteX;