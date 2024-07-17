import { useState } from "react";
import "./App.css";
import { Counter } from "./component/Counter";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="couter">
      <button onClick={() => setShow(!show)}>Show/Hide</button>
      {show && <Counter />}
    </div>
  );
}

export default App;
