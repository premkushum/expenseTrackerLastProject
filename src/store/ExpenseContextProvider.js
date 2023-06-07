import { useEffect, useState } from "react";
import ExpenseContext from "./ExpenseContext";
const ExpenseContextProvider = (props) => {
  const [expense, setExpense] = useState([]);
  useEffect(()=>{
    fetch(
        "https://expensetrackerdemo-4954a-default-rtdb.firebaseio.com/testing.json",
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("data didnt saved in server");
          }
        })
        .then((res) => {
          console.log(res);
          const newItems=Object.values(res).map((item)=>{//we are converting to array
            return {name:item.name,amount:item.amount,category:item.category}
          })
          setExpense(newItems)
        })
        .catch((err) => {
          console.log(err);
        });
  },[])
  const expenseHandler = (expenseData) => {
    console.log(expenseData);
    fetch(
      "https://expensetrackerdemo-4954a-default-rtdb.firebaseio.com/testing.json",
      {
        method: "POST",
        body: JSON.stringify(expenseData),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("data didnt saved in server");
        }
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setExpense((prevstate) => {
      return [...prevstate, expenseData];
    });
  };
  const ExpenseContextHelper = {
    addExpense: expenseHandler,
    expenseItem: expense,
  };
  return (
    <ExpenseContext.Provider value={ExpenseContextHelper}>
      {props.children}
    </ExpenseContext.Provider>
  );
};
export default ExpenseContextProvider;
