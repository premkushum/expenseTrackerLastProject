import { Fragment, useContext, useEffect, useRef, useState } from "react";
import ExpenseContext from "../../store/ExpenseContext";
import ExpenseDeleteButton from "./ExpenseDeleteButton";
import EditButton from "./editExpense/editButton";
import navcss from "./expenseprint.module.css";
import Expensegraph from "./Expensegraph";

const ExpensePrint = () => {
  const expenseCtx = useContext(ExpenseContext);
  const [filterarray, setFilterArray] = useState(expenseCtx.expenseItem);
 
  useEffect(() => {
    // Update filterarray whenever expenseCtx.expenseItem changes
    setFilterArray(expenseCtx.expenseItem);
  }, [expenseCtx.expenseItem])
  const sortref = useRef();

  let filterExpenses = expenseCtx.expenseItem;

  const sorteditemhandler = () => {
    const sortvalue = sortref.current.value;
    if (sortvalue) {
      filterExpenses = expenseCtx.expenseItem.filter((item) => {
        console.log(item.date);
        return item.date == sortvalue;
      });
      setFilterArray(filterExpenses);
    } else {
      setFilterArray(expenseCtx.expenseItem);
    }
  };

  let total = 0;
  const newArray = filterarray.map((item) => {
    total = item.amount + total;
    return (
      <div key={item.id}>
        <div className={navcss.category}>
          <div className={navcss.item}>
            <h3 className={navcss.itemname}>{item.name}</h3>
            <h3 className={navcss.amount}>{item.amount}</h3>
            <h3 className={navcss.categoryname}>{item.category}</h3>
            <div className={navcss.categorybtn}>
              <ExpenseDeleteButton token={item.token}></ExpenseDeleteButton>
              <EditButton items={item}></EditButton>
            </div>
          </div>
        </div>
        <hr></hr>
      </div>
    );
  });
  const handleDownload = () => {
    const content = JSON.stringify(expenseCtx.expenseItem, null, 2);
    const blob = new Blob([content], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "expense.xls";
    link.click();
  };

  return (
    <Fragment>
      <div className={navcss.buttons}>
        {total > 10000 ? <button>Activate premium</button> : ""}
        <button onClick={handleDownload}>Download</button>
        <input type="date" ref={sortref}></input>
        <button onClick={sorteditemhandler}>graph viewer</button>
      </div>
      <div className={navcss.wrapper}>
        <div className={navcss.container}>{newArray}</div>
        <div className={navcss.graphcategory}>
          <h2>graph representer</h2>

          <div className={navcss.graph}>
            <Expensegraph items={filterarray}></Expensegraph>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ExpensePrint;
