import React, { useEffect, useState } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(0);



  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer(timer + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timer]);

return (
  <> 
  <h1>Timer avulso</h1>
  <h2>{timer}</h2>
  </>
)
}

export default Timer;
