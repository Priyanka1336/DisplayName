import React, { useState } from "react";

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");

  // Regex for letters only (no numbers or special characters)
  const lettersOnly = /^[A-Za-z]+$/;

  const validateInput = (name) => {
    return lettersOnly.test(name);
  };

  const handleFirstNameChange = (event) => {
    const value = event.target.value;
    if (value === "" || validateInput(value)) {
      setFirstName(value);
      setError(""); // Clear error if input is valid or empty
    } else {
      setError("Only letters are allowed for names.");
    }
  };

  const handleLastNameChange = (event) => {
    const value = event.target.value;
    if (value === "" || validateInput(value)) {
      setLastName(value);
      setError(""); // Clear error if input is valid or empty
    } else {
      setError("Only letters are allowed for names.");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate first name and last name
    if (!firstName || !lastName) {
      setError("Both first and last name are required.");
      return;
    }
    if (!validateInput(firstName) || !validateInput(lastName)) {
      setError("Only letters are allowed for names.");
      return;
    }

    // Clear error and set full name
    setError("");
    setFullName(`${firstName} ${lastName}`);
  };

  // Enable submit button only if both fields are non-empty and valid
  const isFormValid =
    firstName &&
    lastName &&
    validateInput(firstName) &&
    validateInput(lastName);

  return (
    <>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name: </label>
        <input
          name="firstName"
          type="text"
          value={firstName}
          onChange={handleFirstNameChange}
        />
        <br />
        <br />
        <label htmlFor="lastName">Last Name: </label>
        <input
          name="lastName"
          type="text"
          value={lastName}
          onChange={handleLastNameChange}
        />
        <br />
        <br />
        <button type="submit" disabled={!isFormValid}>
          Submit
        </button>
      </form>

      {/* Display error message */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Display full name */}
      {fullName && <p>Full Name: {fullName}</p>}
    </>
  );
}
