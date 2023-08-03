import { useContext } from "react";
import ExpenseContext from "../../store/ExpenseContext";
// import { RiDeleteBin5Fill } from "./react-icons/ri"

import { RiDeleteBin5Fill } from 'react-icons/ri';



const ExpenseDeleteButton = (props) => {
  const expenseCtx = useContext(ExpenseContext);

  const deleteItemHandler = () => {
    

    const itemAfterDeletion = expenseCtx.expenseItem.filter((item) => {
      return item.token !== props.token;
    });
    expenseCtx.deleteExpense(itemAfterDeletion, props.token);
  };
  return <button onClick={deleteItemHandler} style={{marginRight:"10px",height:"40px"}}><RiDeleteBin5Fill></RiDeleteBin5Fill>delete</button>;
};
export default ExpenseDeleteButton;
