import { Link } from "react-router-dom/cjs/react-router-dom.min";
import LogOutButton from "../LogOut/LogOut";
import ExpenseForm from "../expense/ExpenseForm";
import ExpensePrint from "../expense/ExpensePrint";
import { themeActions } from "../../store/reducerStore";
import { useDispatch, useSelector } from "react-redux";
import navcss from "./welcome.module.css";
import { useState } from "react";

const Welcome = () => {
  // const themeLight = useSelector((state) => state.theme.isLight);
  const [themelight, settheme] = useState(true);
  const dispatch = useDispatch();

  const verifyEmailHandler = () => {
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCKcB2kOdfnhOnnC789pc1BZXjZzebQnu0",
      {
        method: "POST",
        body: JSON.stringify({
          requestType: "VERIFY_EMAIL",
          idToken: localStorage.getItem("token"),
        }),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("not verified");
        }
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const ThemeHandler = () => {
    settheme(!themelight);
  };

  return (
    <div className={themelight ? navcss.container : navcss.containerblack}>
      <div className={navcss.welcome}>
        <div className={navcss.welcomemsg}>
          <h2>welcome to Expense Tracker</h2>
        </div>

        <div className={navcss.profilemsg}>
          <p>
            your profile is incomplete{" "}
            <Link to="/profile" className={navcss.link}>
              {" "}
              complete now
            </Link>
          </p>
        </div>
      </div>
      <hr></hr>
      <div className={navcss.formcontrol}>
        <ExpenseForm></ExpenseForm>
        <div className={navcss.navigation}>
          <button onClick={verifyEmailHandler}>verify email</button>

          <button onClick={ThemeHandler}>
            {themelight ? "Dark Theme" : "Light Theme"}
          </button>
          <LogOutButton></LogOutButton>
        </div>
      </div>
      <hr></hr>

      <ExpensePrint></ExpensePrint>
    </div>
  );
};
export default Welcome;
