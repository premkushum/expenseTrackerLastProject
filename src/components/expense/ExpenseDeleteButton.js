import { useContext } from "react";
import ExpenseContext from "../../store/ExpenseContext";

const ExpenseDeleteButton = (props) => {
  const expenseCtx = useContext(ExpenseContext);

  const deleteItemHandler = () => {
    

    const itemAfterDeletion = expenseCtx.expenseItem.filter((item) => {
      return item.token !== props.token;
    });
    expenseCtx.deleteExpense(itemAfterDeletion, props.token);
  };
  return <button onClick={deleteItemHandler}>delete</button>;
};
export default ExpenseDeleteButton;
