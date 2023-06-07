import { useState } from "react";
import ExpenseContext from "./ExpenseContext";
const ExpenseContextProvider = (props) => {
  const [expense, setExpense] = useState([]);
  const expenseHandler = (expenseData) => {
    console.log(expenseData)
    setExpense((prevstate) => {
      return [...prevstate, expenseData];
    });
  };
  const ExpenseContextHelper = {
    addExpense: expenseHandler,
    expenseItem: expense
  };
  return (
    <ExpenseContext.Provider value={ExpenseContextHelper}>
      {props.children}
    </ExpenseContext.Provider>
  );
};
export default ExpenseContextProvider;
