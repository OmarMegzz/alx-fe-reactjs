import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: "inline-block", textAlign: "left" }}
      >
        <div style={{ marginBottom: "10px" }}>
          <label>Name:</label>
          <br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ padding: "5px", width: "100%" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Email:</label>
          <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: "5px", width: "100%" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Message:</label>
          <br />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{ padding: "5px", width: "100%" }}
          />
        </div>
        <button type="submit" style={{ padding: "10px 15px" }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
