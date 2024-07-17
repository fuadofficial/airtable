import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);


  const Increment = () => {
    if (count < 10) {
      setCount((prev) => prev + 1);
    }
  };

  const Decrement = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </div>
  );
};