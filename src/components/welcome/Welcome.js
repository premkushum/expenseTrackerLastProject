import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Welcome = () => {
  return (
    <div>
      <div style={{ display:"inline-flex" ,marginRight:"40%"}}>
        <h2>welcome to Expense tracker</h2>
      </div>
      <div style={{textAlign:"right", display:"inline-flex"}}>
        <h2>
          your profile is incomplete <Link to="/profile">complete now</Link>
        </h2>
      </div>
      <hr></hr>
    </div>
  );
};
export default Welcome;
