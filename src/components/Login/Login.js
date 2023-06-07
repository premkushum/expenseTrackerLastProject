import { useRef, useState } from "react";
import { Redirect } from "react-router-dom";
const Login = () => {
  const [redirect, setRedirect] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const inputDataHAndler = (event) => {
    event.preventDefault();
    const myobj = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    console.log(myobj);
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCKcB2kOdfnhOnnC789pc1BZXjZzebQnu0",
      {
        method: "POST",
        body: JSON.stringify({
          email: emailRef.current.value,
          password: passwordRef.current.value,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((res) => {
        localStorage.setItem("token", (res.idToken));
        setRedirect(true);
      })
      .catch((err) => {
        alert("wrong details ....authentication failed");
      });
  };
  if (redirect) {
    return <Redirect to="/welcome"></Redirect>;
  }
  return (
    <div>
      <h2>LOGIN PAGE</h2>
      <div
        style={{ margin: "30%", borderBlockStyle: "groove", height: "200px" }}
      >
        {" "}
        <form onSubmit={inputDataHAndler}>
          <div style={{ display: "block" }}>
            <input
              type="email"
              style={{
                backgroundColor: "black",
             
                height: "25px",
                color: "white",
                margin: "10px",
              }}
              placeholder={"email"}
              ref={emailRef}
            ></input>
          </div>
          <div style={{ display: "block" }}>
            {" "}
            <input
              type="password"
              style={{
                backgroundColor: "black",
                
                height: "25px",
                color: "white",
                margin: "10px",
                color: "white",
              }}
              placeholder="PassWord"
              ref={passwordRef}
            ></input>
            <div style={{ display: "block" }}>
              <button
                style={{
                  backgroundColor: "black",
                  borderRadius: "40%",
                  height: "25px",
                  width: "200px",
                  color: "white",
                  margin: "10px ",
                  color: "white",
                }}
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
