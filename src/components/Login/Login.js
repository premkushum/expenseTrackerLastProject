import { useRef } from "react";

const Login = () => {
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
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDTjkTahc6Ekoy2QubulsZKyfhpCkZ4Q4Y",
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
        localStorage.setItem("e-user", JSON.stringify(res.idToken));
      })
      .catch((err) => {
        alert("wrong details ....authentication failed");
      });
  };
  return (
    <div style={{ margin: "30%", borderBlockStyle: "groove", height: "200px" }}>
      {" "}
      <form onSubmit={inputDataHAndler}>
        <div style={{ display: "block" }}>
          <input
            type="email"
            style={{
              backgroundColor: "black",
              borderRadius: "40%",
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
              borderRadius: "40%",
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
  );
};
export default Login;
