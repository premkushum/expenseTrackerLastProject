import React, { Fragment } from "react";

import SignUpFormPrint from "./components/Signup/SignUpFormPrint";
import Login from "./components/Login/Login";
import EditForm from "./components/expense/editExpense/editForm";
// import { Route } from "react-router-dom/cjs/react-router-dom.min";
import { Switch, Route } from "react-router-dom";
import Welcome from "./components/welcome/Welcome";
import Profile from "./components/profile/Profile";
import ForgotPassword from "./components/forgetPassword/ForgotPassword";
import SignUpForm from "./components/Signup/SignUp";
function App() {
  return (
    <>
      <Switch>
        <Route path="/edit">
          <EditForm></EditForm>
        </Route>
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
          {/* <SignUpFormPrint></SignUpFormPrint> */}
          <SignUpForm></SignUpForm>
        </Route>
      </Switch>
    </>
  );
}

export default App;
