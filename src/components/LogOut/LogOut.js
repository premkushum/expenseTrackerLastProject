import { useState } from "react";
import {Redirect} from "react-router-dom"

const LogOutButton = () => {
  const [logOut, setLogOut] = useState(false);
  const logOutHandler = () => {
    localStorage.removeItem("token");
    setLogOut(true);
  };
  if (logOut) {
    return <Redirect to="/auth"></Redirect>;
  }
  return <button onClick={logOutHandler}>LogOut</button>;
};
export default LogOutButton;
