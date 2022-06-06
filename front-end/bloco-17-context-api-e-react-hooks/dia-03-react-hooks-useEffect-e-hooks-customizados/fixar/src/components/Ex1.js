import React, { useEffect, useState } from "react";

const Ex1 = () => {
  const [timer, setTimer] = useState(0);
  const [number, setNumber] = useState(1);
  const [mult, setMult] = useState(false);

  /// Se o número for múltiplo de 3 ou 5, uma mensagem "Acerto" é exibida na tela;
  // A mensagem de acerto é removida 4 segundos depois de ser exibida;
  const validateMult = (randomNumber) => {
    if (randomNumber % 3 === 0 || randomNumber % 5 === 0) {
      setMult(true);
      setTimeout(() => setMult(false), 4000);
    }
  }

  // Um número aleatório de 1 a 100;
const handleRandomNumber = () => {
const randomNumber =  Math.round( Math.floor(Math.random() * 100) + 1
);
  setNumber(randomNumber)
  validateMult(randomNumber)
}

const doTimer = () => {
  setTimer(timer => timer + 1);
}

  useEffect(() => {
    // A cada 10 segundos ele gera e exibe na tela um número aleatório de 1 a 100;
    const intervalNumber = setInterval(handleRandomNumber , 10000);
    const setTimerInterval = setInterval(doTimer, 1000);
    return () => {
      clearInterval(intervalNumber); 
      // O timer é removido quando o componente é desmontado.
      clearInterval(setTimerInterval);
    }
  }, []);

return (
  <> 
  <h1>Ex1</h1>
  <h2>{`Random number: ${number}`}</h2>
  <h3>{`Timer: ${timer}`}</h3>
  <h4>{mult && 'Acerto'}</h4>
  </>
)
}

export default Ex1;


// Para fixar, faça um componente funcional React com as seguintes funcionalidades:



