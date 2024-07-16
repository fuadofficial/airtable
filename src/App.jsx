import { useState } from "react";
import "./App.css";
import { Counter } from "./component/Counter";

function App() {
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
    <div className="couter">
      <Counter count={count} Increment={Increment} Decrement={Decrement} />
    </div>
  );
}

export default App;
