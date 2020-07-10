import React from "react";
import * as firebase from "firebase";

const Login = ({
  setR,
  email,
  password,
  error,
  setLogged,
  setError,
  setEmail,
  setPassword,
  setForgot,
  forgot,
}) => {
  const handleUser = (email) => {
    setEmail(email);
  };
  const handlePassword = (password) => {
    setPassword(password);
  };

  const mostrar = (e) => {
    setR(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const Remail = e.target[0].value;
    const Rpassword = e.target[1].value;
    const auth = firebase.auth();
    auth.signInWithEmailAndPassword(Remail, Rpassword).catch((e) => {
      console.log(e.message);
      setError(true);
      setTimeout(() => setError(false), 4000);
    });
    firebase.auth().onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        console.log(firebaseUser);
        setLogged(true);
        setEmail("");
        setPassword("");
        setTimeout(() => console.log("cargando"),4000);
      } else {
        console.log("not logged in");
      }
    });
  };

  const handleForgot = () => {

    setForgot(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-center">
          <div className="form-group">
            <input
              type="text"
              id="user"
              className="form-control"
              name="user"
              placeholder="user"
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
            <input type="checkbox"></input>
            Recuerdame
          </div>
          <button type="submit" className="btn btn-submit">
            submit
          </button>
          <button className="btn btn-submit" onClick={mostrar}>
            register
          </button>
          <p className="forgot" onClick={handleForgot}>
            forgot pass?
          </p>
          {error && <h3>Login failed</h3>}
        </div>
      </form>
    </div>
  );
};

export default Login;
