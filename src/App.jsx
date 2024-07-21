import { useState } from "react";
import "./App.css";
import "./styles/global.css";

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
                <h1>Register</h1>
                <p className="caption">Please fill the form.</p>
                <div className="input-section">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        id="firstName"
                        type="text"
                        name="firstName"
                        onChange={handleChange}
                    />
                </div>
                <div className="input-section">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" name="email" onChange={handleChange} />
                </div>
                <div className="input-section radio-groups">
                    <label className="radio-title" htmlFor="">Genter : </label>
                    <div>
                        <input
                            id="male"
                            type="radio"
                            value="male"
                            name="genter"
                            onChange={handleChange}
                        />
                        <label htmlFor="male"> Male </label>
                        <input
                            type="radio"
                            id="female"
                            value="female"
                            name="genter"
                            onChange={handleChange}
                        />
                        <label htmlFor="female"> Female </label>
                    </div>
                </div>
                <div className="input-section dropdown-section">
                    <label htmlFor="select-countrie">Countrie</label>
                    <select id="select-countrie" name="cuntry" onChange={handleChange}>
                        <option value="">Select Countrie</option>
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
