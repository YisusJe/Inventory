import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import * as firebase from "firebase";
import { FirebaseDatabaseProvider } from "@react-firebase/database";

var config = {
  apiKey: "AIzaSyDKN6VqGrDENF9_hYuf0dVC7xhFOiol4Ts",
  authDomain: "inventory-47dbd.firebaseapp.com",
  databaseURL: "https://inventory-47dbd.firebaseio.com",
  projectId: "inventory-47dbd",
  storageBucket: "inventory-47dbd.appspot.com",
  messagingSenderId: "608885113418",
  appId: "1:608885113418:web:fb07159eda4193cb825cb3",
};
firebase.initializeApp(config);

ReactDOM.render(
  <FirebaseDatabaseProvider>
    <App />
  </FirebaseDatabaseProvider>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
