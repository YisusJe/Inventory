import React, { useState } from "react";
import * as firebase from "firebase";

const Login = ({
  setR,
  email,
  password,
  setLogged,
  setEmail,
  setPassword,
  setForgot,
  handleAlert,
  setIsLoading,
  isLoading,
}) => {
  const [remember, setRemember] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const register = (e) => {
    setR(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const Remail = e.target[0].value;
    const Rpassword = e.target[1].value;
    const auth = firebase.auth();
    handleAlert({ type: "loading", text: "loading", time: 2000 });

    auth
      .signInWithEmailAndPassword(Remail, Rpassword)
      .then(() => setIsLoading(false))
      .catch((e) => {
        console.log(e.message);
        if (Remail === "") {
          handleAlert({
            type: "danger",
            text: "cannot have the email empty",
            time: 4000,
          });
          setLogged(false);
        } else {
          handleAlert({
            type: "danger",
            text: "incorrect email or password ",
            time: 4000,
          });
          setLogged(false);
        }
      });
    firebase.auth().onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        console.log(firebaseUser);
        setLogged(true);
        if (remember) {
          setEmail(Remail);
        } else {
          setEmail("");
        }
        setPassword("");
      } else {
        console.log("not logged in");
      }
    });
  };

  const handleForgot = () => {
    setForgot(true);
  };

  const toggleRemember = () => {
    setRemember(!remember);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-center">
          <div className="form-group">
            <input
              type="text"
              id="email"
              className="form-control"
              name="email"
              placeholder="email"
              value={email}
              onChange={handleEmail}
            ></input>
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              placeholder="password"
            ></input>
          </div>
          <div>
            <input
              type="checkbox"
              checked={remember}
              onChange={toggleRemember}
            ></input>
            Recuerdame
          </div>
          <button type="submit" className="btn btn-submit">
            submit
          </button>
          <button className="btn btn-submit" onClick={register}>
            register
          </button>
          <p className="forgot" onClick={handleForgot}>
            forgot pass?
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
