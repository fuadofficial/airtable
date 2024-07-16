import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const Increment = () => {
    setCount((prev) => prev + 1);
  };
  const Decrement = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <div className="couter">
      <h1>Couter</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <h1>{count}</h1>
    </div>
  );
}

export default App;
