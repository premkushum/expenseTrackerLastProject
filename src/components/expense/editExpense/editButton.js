import { useContext } from "react";
import ExpenseContext from "../../../store/ExpenseContext";
import { Route, Redirect } from "react-router-dom";
import editForm from "./editForm";
import { useState } from "react";
import EditForm from "./editForm";
const EditButton = (props) => {
  const expenseCtx = useContext(ExpenseContext);
  const [editForm, setEditForm] = useState(false);
  const editItemHandler = () => {
    setEditForm(true);
  };
  const editFormCloser = () => {
    
    setEditForm(false);
  };
    if (editForm) {
      return <EditForm onSubmitClick={editFormCloser} items={props.items}></EditForm>;
    }
  return (
    <div>
      <button onClick={editItemHandler}>EDIT</button>
    </div>
  );
};
export default EditButton;
