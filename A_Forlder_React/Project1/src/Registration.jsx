import React, { useState } from "react";

function Registration({ regData }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  function DoRegister(e) {
    e.preventDefault();
    const ObjData = { name, email, pass };
    regData(ObjData); // Pass the data to the parent component
    setName("");
    setEmail("");
    setPass("");
  }

  return (
    <div>
      <form onSubmit={DoRegister}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter name"
          />
          <small className="form-text text-muted">
            We'll never share your name with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
          />
          <small className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Register Yourself
        </button>
      </form>
    </div>
  );
}

export default Registration;
