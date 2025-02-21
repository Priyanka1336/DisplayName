import React, { useState } from "react";

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");

  const handleFirstNameChange = (event) => {
    const value = event.target.value;
    setFirstName(value);
    setError(""); // Clear error on input change
  };

  const handleLastNameChange = (event) => {
    const value = event.target.value;
    setLastName(value);
    setError(""); // Clear error on input change
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if either field is empty
    if (!firstName || !lastName) {
      setError("Both first and last name are required.");
      setFullName(""); // Clear full name if validation fails
      return;
    }

    // Clear error and set full name
    setError("");
    setFullName(`${firstName} ${lastName}`);
  };

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
        <button type="submit">Submit</button>
      </form>

      {/* Display error message */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Display full name only if both fields are filled */}
      {fullName && <p>Full Name: {fullName}</p>}
    </>
  );
}
