import { useState } from "react";
import "./App.css";

function App() {
  const [fields, setFields] = useState({
    firstName: "",
    email: "",
    password: "",
    genter: "",
    cuntry: "",
  });

  const handleChange = (event) => {
    setFields((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (eve) => {
    eve.preventDefault();
    console.log(fields);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="number"
            name="password"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">Genter : </label>
          <label htmlFor="male"> Male </label>
          <input
            id="male"
            type="radio"
            value="male"
            name="genter"
            onChange={handleChange}
          />
          <label htmlFor="female"> Female </label>
          <input
            type="radio"
            id="female"
            value="female"
            name="genter"
            onChange={handleChange}
          />
        </div>
        <div>
          <select name="cuntry" onChange={handleChange}>
            <option value="">Select cuntry</option>
            <option value="INDIA">INDIA</option>
            <option value="UAE">UAE</option>
            <option value="EUROPE">EUROPE</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
