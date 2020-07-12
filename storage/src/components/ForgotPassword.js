import React, { useState } from "react";
import * as firebase from "firebase";

const ForgotPassword = ({ setForgot,handleAlert }) => {
  const [email, setEmail] = useState("");

  const getEmail = () => {
    const auth = firebase.auth();
    if (email !== "") {
      auth
        .sendPasswordResetEmail(email)
        .then(() => {
          window.alert("mensaje enviado a este correo");
        })
        .catch((err) => {
          console.log(err.code);
          window.alert("Message : " + err.Message);
        });
    } else {
      window.alert("escribe el correo");
    }
  };


  const handleEmail = (e) => {
    
    setEmail(e.target.value);
  }

  return (
    <div>
      <h3>le enviaremos la info a este correo</h3>
      <input
        type="email"
        value={email}
        onChange={handleEmail}
        placeholder="email"
      ></input>
      <button className="btn btn-submit" onClick={getEmail}>
        submit
      </button>
      <button className="btn btn-submit" onClick={() => setForgot(false)}>
        Return to Login
      </button>
    </div>
  );
};

export default ForgotPassword;
