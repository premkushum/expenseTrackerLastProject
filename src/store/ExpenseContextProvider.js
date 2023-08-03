import { useEffect, useState } from "react";
import ExpenseContext from "./ExpenseContext";
const ExpenseContextProvider = (props) => {
  const [expense, setExpense] = useState([]);
  useEffect(() => {
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
          throw new Error("data didnt save in server");
        }
      })

      .then((res) => {
        if (res) {
          const newItems = Object.values(res).map((item) => {
            //we are converting to array
            return {
              id: item.id,
              name: item.name,
              amount: item.amount,
              category: item.category,
              token: item.token,
              date: item.date,
            };
          });
          setExpense(newItems);
        } else {
          setExpense([]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(expense)

  const expenseHandler = (expenseData) => {
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
        setExpense((prevstate) => {
          fetch(
            ` https://expensetrackerdemo-4954a-default-rtdb.firebaseio.com/testing/${res.name}.json`,
            {
              method: "PUT",
              body: JSON.stringify({ ...expenseData, token: res.name }),
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
            .then((res) => {})
            .catch((err) => {
              console.log(err);
            });

          return [...prevstate, { ...expenseData, token: res.name }];
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteExpenseHandler = (newExpenseData, token) => {
    fetch(
      `https://expensetrackerdemo-4954a-default-rtdb.firebaseio.com/testing/${token}.json`,
      {
        method: "DELETE",
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(
            "expense data did not deleted......try again and dont forget to check internet connection"
          );
        }
      })
      .then((res) => {
        setExpense(newExpenseData);
      })
      .catch((err) => {
        alert(err);
      });
  };
  const editExpenseHandler = (editedExpenseData) => {
    const existingIndex = expense.findIndex((item) => {
      return item.token === editedExpenseData.token;
    });
    const existingItem = expense[existingIndex];

    const updatedItem = { ...editedExpenseData };

    const updatedItems = [...expense];

    updatedItems[existingIndex] = updatedItem;
    setExpense(updatedItems);
  };


  const ExpenseContextHelper = {
    addExpense: expenseHandler,
    expenseItem: expense,
    deleteExpense: deleteExpenseHandler,
    editExpense: editExpenseHandler,
  };
  return (
    <ExpenseContext.Provider value={ExpenseContextHelper}>
      {props.children}
    </ExpenseContext.Provider>
  );
};
export default ExpenseContextProvider;
