import { useRef } from "react";
import { Link } from "react-router-dom";
const ForgotPassword = () => {
  const emailRef = useRef();

  const forgotPasswordHandler = () => {
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCKcB2kOdfnhOnnC789pc1BZXjZzebQnu0",
      {
        method: "POST",
        body: JSON.stringify({
          requestType: "PASSWORD_RESET",
          email: emailRef.current.value,
        }),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("retry.....an error occured while changing password");
        }
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        // Handle specific error type
        console.log("A TypeError occurred:", err.message);
      });
  };
  return (
    <div style={{ backgroundColor: "yellow" }}>
      <div
        style={{
          backgroundColor: "black",
          marginTop: "300px",
          paddingLeft: "300px",
          color: "white",
          height: "300px",
        }}
      >
        <h4>Enter the registered email</h4>
        <input placeholder="Email" ref={emailRef}></input>
        <button
          style={{ backgroundColor: "brown" }}
          onClick={forgotPasswordHandler}
        >
          Send Link
        </button>
        <p>
          Already a user?
          <Link to="/auth">
            <b style={{ color: "yellow" }}>LOGIN</b>
          </Link>
        </p>
      </div>
    </div>
  );
};
export default ForgotPassword;
