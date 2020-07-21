import React, { useState } from "react";
import "./Inventory.css";
import Login from "./Login";
import Register from "./Register";
import Page from "./subComponents/Page";
import * as firebase from "firebase";
import ForgotPassword from "./ForgotPassword";
import Alert from "./Alert";

const Inventory = () => {
  const [logged, setLogged] = useState(false);
  const [R, setR] = useState(false);
  const [forgot, setForgot] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [alert, setAlert] = useState({ show: false });
  const [isLoading, setIsLoading] = useState(false);

  const handlerLogOut = () => {
    firebase.auth().signOut();
    setLogged(false);
    handleAlert({
      type: "success",
      text: "you have logout successfully",
      time: 2000,
    });
  };
  const handleAlert = ({ type, text, time }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, time);
  };

  return (
    <div>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <h1>Inventory</h1>
      <main>
        {logged ? (
          <Page handlerLogOut={handlerLogOut} handleAlert={handleAlert} />
        ) : R ? (
          <Register setR={setR} handleAlert={handleAlert} />
        ) : !forgot ? (
          <Login
            setR={setR}
            handlerLogOut={handlerLogOut}
            email={email}
            password={password}
            error={error}
            setError={setError}
            setLogged={setLogged}
            setEmail={setEmail}
            setPassword={setPassword}
            setForgot={setForgot}
            handleAlert={handleAlert}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
        ) : (
          <ForgotPassword setForgot={setForgot} handleAlert={handleAlert} />
        )}
      </main>
    </div>
  );
};

export default Inventory;
