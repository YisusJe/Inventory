import React, {useState} from "react";
import "./Inventory.css";
import Login from "./Login";
import Register from "./Register";
import Page from "./subComponents/Page";
import * as firebase from "firebase";
import ForgotPassword from "./ForgotPassword";

const Inventory = () => {
    const [logged, setLogged] = useState(false);
    const [R, setR] = useState(false);
    const [forgot, setForgot] = useState(false)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handlerLogOut = () =>    {
        firebase.auth().signOut();
        setLogged(false);
    };

    return (
        <div>
            <h1>Inventory</h1>
            <main>
                {logged ? (
                    <Page handlerLogOut={handlerLogOut}/>
                ) : R ? (
                    <Register setR={setR}/>
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
                    />
                ) : <ForgotPassword setForgot={setForgot}/>}
            </main>
        </div>
    );
};

export default Inventory;
