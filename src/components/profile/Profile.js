import { useRef } from "react";

const Profile = () => {
  const fullNameRef = useRef();
  const urlRef = useRef();

  const updateFormDataHandler = (event) => {
    event.preventDefault();
    const nameRefValue = fullNameRef.current.value;
    const urlRefValue = urlRef.current.value;
    const localstr = localStorage.getItem("token");
    console.log(localstr);

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCKcB2kOdfnhOnnC789pc1BZXjZzebQnu0 ",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: localstr,
          displayName: nameRefValue,
          photoUrl: urlRefValue,
      
          returnSecureToken: true,
        }),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Authentication error");
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
    <form onSubmit= {updateFormDataHandler}>
      <div>
        <h2>Contact details</h2>
      </div>

      <label>Full Name</label>
      <input type="text" ref={fullNameRef}></input>

      <label>Profile Photo URL</label>
      <input type="text" ref={urlRef}></input>

      <button >UPDATE</button>
    </form>
  );
};
export default Profile;
