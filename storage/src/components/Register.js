import React, { useState } from "react";
import * as firebase from "firebase";
const Register = ({ setR,handleAlert }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [failedRegister,setFailedRegister] = useState(false);

  const handleRegister = (e) => {
    const email = e.target[0].value;
    const password = e.target[1].value;
    setR(false);
    const auth = firebase.auth();
    auth
      .createUserWithEmailAndPassword(email, password)
      .catch(function (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        setFailedRegister(true);
        handleAlert({type: "danger",text: `registry failed with error ${errorCode} - ${errorMessage}`, time:5000})
      });
    if(!failedRegister){
      handleAlert({type: "success",text: "registry successfully",time:4000})
    }
    setFailedRegister(false);
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
          Sign Up
        </button>
        <button onClick={() => setR(false)} className="btn btn-submit register">
          Return to Login
        </button>
      </div>
    </form>
  );
};

export default Register;
