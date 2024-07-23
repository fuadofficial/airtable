import { useState } from "react";
import "./App.css";
import "./styles/global.css";
import { TextInput } from "./components/TextInput/TextInput";

function App() {

    const [fields, setFields] = useState({
        firstName: "",
        email: "",
        genter: "",
        country: "",
        skills: [],
    });

    const [errorFields, setErrorFields] = useState({
        firstName: false,
        email: false,
        genter: false,
        country: false,
        skills: false,
    })

    const handleChange = (event) => {
        setFields((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
        isFormValidationOnBlur(event)
    };

    const handleCheckBox = (event) => {
        const { checked, value, name } = event.target;
        let newSkills = [...fields.skills]
        if (checked) {
            newSkills.push(value)
        } else {
            newSkills = newSkills.filter((skill) => skill !== value)
        }

        setFields((prev) => ({
            ...prev,
            [name]: newSkills,
        }));
    }

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
            country: false,
            skills: false,
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
        if (fields.country === "") {
            errors.country = true
        }
        if (fields.skills.length === 0) {
            errors.skills = true
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
        } else if (name === "country" && value === "") {
            error = true;
        } else if (name === "skills" && value.length === 0) {
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
                <TextInput
                    handleChange={handleChange}
                    isFormValidationOnBlur={isFormValidationOnBlur}
                    errorFields={errorFields}
                    label="First Name"
                    id="firs-name"
                    name="firstName"
                    type="text"
                />
                <TextInput
                    handleChange={handleChange}
                    isFormValidationOnBlur={isFormValidationOnBlur}
                    errorFields={errorFields}
                    label="Email"
                    id="email"
                    name="email"
                    type="email"
                />
                <div className="input-section radio-groups">
                    <label className="radio-title" htmlFor="genter">Genter : <span className="danger">*</span></label>
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
                        {errorFields.genter && <p className="danger">checkbox is required</p>}
                    </div>
                </div>
                <div className="input-section dropdown-section">
                    <label htmlFor="select-country">Country <span className="danger">*</span></label>
                    <select id="select-country" name="country" onChange={handleChange} onBlur={isFormValidationOnBlur}                    >
                        <option value="">Select Countrie</option>
                        <option value="INDIA">INDIA</option>
                        <option value="UAE">UAE</option>
                        <option value="EUROPE">EUROPE</option>
                    </select>
                    {errorFields.country && <p className="danger">Countrie is required</p>}
                </div>
                <div className="input-section radio-groups">
                    <label className="radio-title" htmlFor="skills">Skills <span className="danger">*</span></label>
                    <div>
                        <input
                            id="Javascript"
                            type="checkbox"
                            value="Javascript"
                            name="skills"
                            onChange={handleCheckBox}
                            onBlur={isFormValidationOnBlur}
                        />
                        <label htmlFor="Javascript"> JavaScript </label>
                        <input
                            type="checkbox"
                            id="react"
                            value="react"
                            name="skills"
                            onChange={handleCheckBox}
                            onBlur={isFormValidationOnBlur}
                        />
                        <label htmlFor="react"> React </label>
                        <input
                            type="checkbox"
                            id="angular"
                            value="angular"
                            name="skills"
                            onChange={handleCheckBox}
                            onBlur={isFormValidationOnBlur}
                        />
                        <label htmlFor="angular"> Angular </label>
                        {errorFields.skills && <p className="danger">checkbox is required</p>}
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default App;
