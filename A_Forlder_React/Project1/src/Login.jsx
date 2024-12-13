import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

function Login({ lData }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  function verification(e) {
    e.preventDefault();
    if (lData && lData.email === email && lData.pass === pass) {
      alert("Login successful!");
    } else {
      alert("Invalid email or password.");
    }
  }

  return (
    <div>
      <form onSubmit={verification}>
        <div className="form-group">
          <label htmlFor="loginEmail">Email address</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control"
            id="loginEmail"
            placeholder="Enter email"
          />
          <small className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="loginPassword">Password</label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            className="form-control"
            id="loginPassword"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
