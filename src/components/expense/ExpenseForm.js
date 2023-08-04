import { useContext, useRef } from "react";
import ExpenseContext from "../../store/ExpenseContext";
import navcss from "./expenseform.module.css";

const ExpenseForm = () => {
  const expenseCtx = useContext(ExpenseContext);
  const nameRef = useRef();
  const AmountRef = useRef();
  const categoryRef = useRef();
  const dateRef = useRef();

  const formDataHandler = (event) => {
    event.preventDefault();
    const myobj = {
      id: Math.random(),
      name: nameRef.current.value,
      amount: +AmountRef.current.value,
      category: categoryRef.current.value,
      date:dateRef.current.value
    };
    expenseCtx.addExpense(myobj);
  };

  return (
    <div className={navcss.container}>
      <form  className={navcss.form}>
        <input
          placeholder="Item Name"
          type="text"
          ref={nameRef}
          
        ></input>
        <input
          placeholder="Amount"
          type="number"
          ref={AmountRef}
          
        ></input>
        <select ref={categoryRef}>
          <option>food</option>
          <option>petrol</option>
          <option>coffee</option>
        </select>
        <input type="date" ref={dateRef}></input>
      </form>{" "}
      <button onClick={formDataHandler}>Save Expense</button>
    </div>
  );
};
export default ExpenseForm;
