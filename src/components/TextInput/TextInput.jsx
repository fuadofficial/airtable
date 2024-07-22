import React from 'react'

const TextInput = ({ handleChange, isFormValidationOnBlur, errorFields, label }) => {
    return (
        <div className="input-section">
            <label htmlFor="firstName">{label} <span className="danger">*</span></label>
            <input
                id="firstName"
                type="text"
                name="firstName"
                onChange={handleChange}
                onBlur={isFormValidationOnBlur}
            />
            {errorFields.firstName && <p className="danger">{label} is required</p>}
        </div>
    )
}

export default TextInput