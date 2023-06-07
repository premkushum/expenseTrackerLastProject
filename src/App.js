import logo from "./logo.svg";
import React, { Fragment } from "react";

import "./App.css";

import SignUpFormPrint from "./components/Signup/SignUpFormPrint";
import Login from "./components/Login/Login";
// import { Route } from "react-router-dom/cjs/react-router-dom.min";
import { Switch, Route } from "react-router-dom";
import Welcome from "./components/welcome/Welcome";
import Profile from "./components/profile/Profile";
import ForgotPassword from "./components/forgetPassword/ForgotPassword";
function App() {
  return (
    <Switch>
      <Route path="/auth">
        {" "}
        <Login></Login>
      </Route>{" "}
      <Route path="/welcome">
        <Welcome></Welcome>
      </Route>
      <Route path="/profile">
        <Profile></Profile>
      </Route>
      <Route path="/forgotPassword">
        <ForgotPassword></ForgotPassword>
      </Route>
      <Route path="/">
        <SignUpFormPrint></SignUpFormPrint>
      </Route>
    </Switch>
  );
}

export default App;
