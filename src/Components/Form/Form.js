import React, { useState } from "react";

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");

  // Regex for letters only (no numbers or special characters)
  const lettersOnly = /^[A-Za-z]+$/;

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate first name and last name
    if (!firstName || !lastName) {
      setError("Both first and last name are required.");
      return;
    }
    if (!lettersOnly.test(firstName) || !lettersOnly.test(lastName)) {
      setError("Only letters are allowed for names.");
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
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="lastName">Last Name: </label>
        <input
          name="lastName"
          type="text"
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />
        <br />
        <button>Submit</button>
      </form>

      {/* Display error message */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Display full name */}
      {fullName && <p>Full Name: {fullName}</p>}
    </>
  );
}
