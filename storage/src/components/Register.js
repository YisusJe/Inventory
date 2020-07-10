import React, { useState } from "react";
import * as firebase from "firebase";
const Register = ({ setR }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    const Remail = e.target[0].value;
    const Rpassword = e.target[1].value;
    setR(false);
    const auth = firebase.auth();
    auth
      .createUserWithEmailAndPassword(Remail, Rpassword)
      .catch(function (error) {
        // Handle Errors here
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ...
      });
    //creando un usuario
  };

  const handleEmail = (type) => {
    setEmail(type);
  };
  const handlePassword = (typeP) => {
    setPassword(typeP);
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Register</h2>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            name="email"
            placeholder="email"
            onChange={(e) => handleEmail(e.target.value)}
            value={email}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            placeholder="password"
            onChange={(e) => handlePassword(e.target.value)}
            value={password}
          ></input>
        </div>
        <button type="submit" className="btn btn-submit register">
          Register
        </button>
        <button onClick={() => setR(false)} className="btn btn-submit register">
          Login
        </button>
      </div>
    </form>
  );
};

export default Register;
