import { Redirect } from "react-router-dom/cjs/react-router-dom";
import SignUpForm from "./SignUp";
import { useState } from "react";

const SignUpFormPrint = () => {
  const [redirect, setRedirect] = useState(false);
  const LoginPageRedirecter = () => {
    setRedirect(true);
  };
  if (redirect) {
    return <Redirect to="/auth"></Redirect>;
  }
  return (
    <div
      style={{
        width: "200px",
        marginLeft: "300px ",
        marginTop: "200px",
        borderBlockStyle: "ridge",
      }}
    >
      <div style={{ borderBlockStyle: "groove", marginBottom: "20px" }}>
        <SignUpForm></SignUpForm>
      </div>
      <div>
        <button onClick={LoginPageRedirecter}>HAVE AN ACCOUNT? LOGIN</button>
      </div>
    </div>
  );
};
export default SignUpFormPrint;
