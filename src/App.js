import React, { Fragment } from "react";

import SignUpFormPrint from "./components/Signup/SignUpFormPrint";
import Login from "./components/Login/Login";
import EditForm from "./components/expense/editExpense/editForm";

import { Switch, Route } from "react-router-dom";
import Welcome from "./components/welcome/Welcome";
import Profile from "./components/profile/Profile";
import ForgotPassword from "./components/forgetPassword/ForgotPassword";
import SignUpForm from "./components/Signup/SignUp";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useContext } from "react";
import ExpenseContext from "./store/ExpenseContext";
import { useState } from "react";

function App() {
  // const themeLight = useSelector((state) => state.theme.isLight);
  // const [themelight, settheme] = useState(true);
  // const dispatch = useDispatch();

  // const expenseCtx = useContext(ExpenseContext);
  // const initialEmail = localStorage.getItem("email");
  // const [testing, setTesting] = useState(
  //   initialEmail ? initialEmail.replace("@", "").replace(".", "") : false
  // );

  // console.log(initialEmail);

  // useEffect(() => {
  //   fetch(
  //     `https://expensetrackerdemo-4954a-default-rtdb.firebaseio.com/${testing}.json`,
  //     {
  //       method: "GET",
  //       headers: { "Content-Type": "application/json" },
  //     }
  //   )
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       } else {
  //         throw new Error("data didnt save in server");
  //       }
  //     })

  //     .then((res) => {
  //       if (res) {
  //         console.log(res);
  //         const newItems = Object.values(res).map((item) => {
  //           const myobj = {
  //             key: item.token,
  //             id: item.id,
  //             name: item.name,
  //             amount: item.amount,
  //             category: item.category,
  //             token: item.token,
  //             date: item.date,
  //           };
  //           console.log(myobj);
  //           expenseCtx.addExpense(myobj);
  //         });
  //       }
  //     })
  //     .catch((err) => {
  //       toast.error("data did not load");
  //     });
  // }, [testing]);
  return (
    <>
      <Switch>
        <Route path="/edit">
          <EditForm></EditForm>
        </Route>
        <Route path="/auth">
          <Login></Login>
        </Route>
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
          <SignUpForm></SignUpForm>
        </Route>
      </Switch>
    </>
  );
}

export default App;
