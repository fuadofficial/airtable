import { useEffect, useState } from "react";
import "./App.css";
import { Counter } from "./component/Counter";
import axios from "axios";

function App() {
  const [show, setShow] = useState(false);
  const [userList, setUserList] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      setUserList(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log(userList);

  return (
    <div className="counter">
      <button onClick={() => setShow(!show)}>Show/Hide</button>
      {show && <Counter />}

      {userList.map((data) => (
        <ul key={data.id}>
          <li>{data.title}</li>
        </ul>
      ))}
    </div>
  );
}

export default App;
