import { useState } from "react";

interface Options{
  initialValue?: number;
}

const useCounter = ({initialValue = 0}: Options) => {
  const [count, setCount] = useState(initialValue);

  const increaseBy = (value: number) => {
    setCount(count + value);
  }

  // El return debe estar dentro de la función y devolver un objeto
  return {
    count,
    increaseBy,
  };
}

export default useCounter;
