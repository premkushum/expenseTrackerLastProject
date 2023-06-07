import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Welcome = () => {
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
  return (
    <div>
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
    </div>
  );
};
export default Welcome;
