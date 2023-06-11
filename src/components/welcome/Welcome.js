import { Link } from "react-router-dom/cjs/react-router-dom.min";
import LogOutButton from "../LogOut/LogOut";
import ExpenseForm from "../expense/ExpenseForm";
import ExpensePrint from "../expense/ExpensePrint";
import { themeActions } from "../../store/reducerStore";
import { useDispatch, useSelector } from "react-redux";

const Welcome = () => {
const themeLight=useSelector(state=>state.theme.isLight)
console.log(themeLight)
const dispatch=useDispatch()

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

  const darkThemeHandler=()=>{
    dispatch(themeActions.dark())
  }
  const lightThemeHandler=()=>{
    dispatch(themeActions.light())
  }
  return (
    <div style={{
      backgroundColor: !themeLight ? "black" : "white",
      color: "brown" }}>
      <div style={{ display: "inline-flex", marginRight: "40%" }}>
        <h2>welcome to Expense tracker</h2>
      </div>
      <div style={{ textAlign: "right", display: "inline-flex" }}>
        <h2>
          your profile is incomplete <Link to="/profile">complete now</Link>
        </h2>
      </div>
      <hr></hr>
      <button onClick={verifyEmailHandler}>verify email</button>
      <div style={{justifyContent:"right"}}>
        <button onClick={darkThemeHandler}>Dark theme</button>
        <button onClick={lightThemeHandler}>Light theme</button>
      </div>
      <LogOutButton></LogOutButton>

      <ExpenseForm></ExpenseForm>
      <ExpensePrint></ExpensePrint>
    </div>
  );
};
export default Welcome;
