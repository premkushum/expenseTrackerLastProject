import { useRef } from "react";

const LoginForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const emailValue=emailRef.current.value
    const passwordValue=passwordRef.current.value
    console.log(emailValue===passwordValue)
    const myobj = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      confirmPassword: confirmPasswordRef.current.value,
    };
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDTjkTahc6Ekoy2QubulsZKyfhpCkZ4Q4Y",
      {
        method: "POST",
        body: JSON.stringify({
          email: emailRef.current.value,
          password: passwordRef.current.value,
          returnSecureToken:true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("authentication failed email password is wrong");
        }
      })
      .then((res) => {
        console.log(res);
        console.log("sucesssssfl")
      })
      .catch((err) => {
        console.log(err);
        alert(err)
      });
  };

  return (
    <div>
      {" "}
      <form onSubmit={formSubmitHandler}>
        <div style={{ display: "block", marginBottom: "10px" }}>
          <label>Email</label>
          <input ref={emailRef}></input>
        </div>
        <div style={{ display: "block", marginBottom: "10px" }}>
          <label>Password</label>
          <input ref={passwordRef}></input>/
        </div>
        <div style={{ display: "block", marginBottom: "20px" }}>
          <label>Confirm Password</label>
          <input ref={confirmPasswordRef}></input>{" "}
        </div>
        <button style={{ borderRadius: "15%" }}>SIGN UP</button>
      </form>
    </div>
  );
};
export default LoginForm;
