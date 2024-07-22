import { useState } from "react";
import "./App.css";
import "./styles/global.css";

function App() {

    const [fields, setFields] = useState({
        firstName: "",
        email: "",
        genter: "",
        countrie: "",
    });

    const [errorFields, setErrorFields] = useState({
        firstName: false,
        email: false,
        genter: false,
        countrie: false,
    })

    const handleChange = (event) => {
        setFields((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
        isFormValidationOnBlur(event)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isFormValidOnSubmit()) {
            console.log('Valid');
            return
        }
        console.log("InValid");
    };

    const isFormValidOnSubmit = () => {
        const errors = {
            firstName: false,
            email: false,
            genter: false,
            countrie: false,
        }
        if (fields.firstName === "") {
            errors.firstName = true
        }
        if (fields.email === "") {
            errors.email = true
        }
        if (fields.genter === "") {
            errors.genter = true
        }
        if (fields.countrie === "") {
            errors.countrie = true
        }
        setErrorFields(errors)

        if (Object.values(errors).some((error) => error === true)) {
            return false
        }
        return true
    }

    const isFormValidationOnBlur = (event) => {
        const { name, value } = event.target;
        let error = false;

        if (name === "firstName" && value === "") {
            error = true;
        } else if (name === "email" && value === "") {
            error = true;
        } else if (name === "genter" && value === "") {
            error = true;
        } else if (name === "countrie" && value === "") {
            error = true;
        }
        setErrorFields((prev) => ({
            ...prev,
            [name]: error,
        }))
    }

    // const isFormValid = () => {
    //     if (fields.firstName === "") {
    //         setErrorFields((prev) => ({
    //             ...prev,
    //             firstName: true
    //         }))
    //         return false
    //     } else {
    //         setErrorFields((prev) => ({
    //             ...prev,
    //             firstName: false
    //         }))
    //         return true
    //     }
    // }

    return (
        <div>
            <form className="form" onSubmit={handleSubmit} autoComplete="off">
                <h1>Register</h1>
                <p className="caption">Please fill the form.</p>
                <div className="input-section">
                    <label htmlFor="firstName">First Name <span className="danger">*</span></label>
                    <input
                        id="firstName"
                        type="text"
                        name="firstName"
                        onChange={handleChange}
                        onBlur={isFormValidationOnBlur}
                    />
                    {errorFields.firstName && <p className="danger">First Name is required</p>}
                </div>
                <div className="input-section">
                    <label htmlFor="email">Email <span className="danger">*</span></label>
                    <input id="email" type="email" name="email" onChange={handleChange} onBlur={isFormValidationOnBlur}
                    />
                    {errorFields.email && <p className="danger">Email is required</p>}
                </div>
                <div className="input-section radio-groups">
                    <label className="radio-title" htmlFor="">Genter : <span className="danger">*</span></label>
                    <div>
                        <input
                            id="male"
                            type="radio"
                            value="male"
                            name="genter"
                            onChange={handleChange}
                            onBlur={isFormValidationOnBlur}
                        />
                        <label htmlFor="male"> Male </label>
                        <input
                            type="radio"
                            id="female"
                            value="female"
                            name="genter"
                            onChange={handleChange}
                            onBlur={isFormValidationOnBlur}
                        />
                        <label htmlFor="female"> Female </label>
                        {errorFields.genter && <p className="danger">Genter is required</p>}
                    </div>
                </div>
                <div className="input-section dropdown-section">
                    <label htmlFor="select-countrie">Countrie <span className="danger">*</span></label>
                    <select id="select-countrie" name="countrie" onChange={handleChange} onBlur={isFormValidationOnBlur}                    >
                        <option value="">Select Countrie</option>
                        <option value="INDIA">INDIA</option>
                        <option value="UAE">UAE</option>
                        <option value="EUROPE">EUROPE</option>
                    </select>
                    {errorFields.countrie && <p className="danger">Countrie is required</p>}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default App;
