
import { useDispatch, useSelector } from "react-redux";
import {Redirect} from "react-router-dom"
import { authAction } from "../../store/reducerStore";

const LogOutButton = () => {
  const logIn=useSelector((state)=>state.auth.isAuthenticated)
  const dispatch=useDispatch()
  
  const logOutHandler = () => {
    localStorage.removeItem("token");
    dispatch(authAction.logout())
    
  };
  if (!logIn) {
    return <Redirect to="/auth"></Redirect>;
  }
  return <button onClick={logOutHandler}>LogOut</button>;
};
export default LogOutButton;
