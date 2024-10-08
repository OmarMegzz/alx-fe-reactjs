import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "blue",
        textAlign: "center",
        padding: "10px",
        display: "flex",
        justifyContent: "center",
        margin: "20px 0",
      }}
    >
      <Link to="/" style={{ background: "blue", margin: "0 15px" }}>
        Home
      </Link>
      <Link to="/about" style={{ background: "gray", margin: "0 15px" }}>
        About
      </Link>
      <Link to="/services" style={{ background: "red", margin: "0 15px" }}>
        Services
      </Link>
      <Link to="/contact" style={{ margin: "0 15px" }}>
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
