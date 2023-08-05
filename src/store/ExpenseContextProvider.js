import { useEffect, useState } from "react";
import ExpenseContext from "./ExpenseContext";
import { toast } from "react-toastify";

const ExpenseContextProvider = (props) => {
  const initialEmail = localStorage.getItem("email");
  const[testing,setTesting]=useState(initialEmail ? initialEmail.replace("@", "").replace(".", "") : "")

  const [expense, setExpense] = useState([]);
  useEffect(() => {
    fetch(
      `https://expensetrackerdemo-4954a-default-rtdb.firebaseio.com/${testing}.json`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
         else {
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
        toast.error(err.message);
      });
  }, [testing]);

  console.log(expense);

  const expenseHandler = (expenseData) => {
    fetch(
      `https://expensetrackerdemo-4954a-default-rtdb.firebaseio.com/${testing}.json`,
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
            ` https://expensetrackerdemo-4954a-default-rtdb.firebaseio.com/${testing}/${res.name}.json`,
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
                throw new Error("Expense didn`t saved in server");
              }
            })
            .then((res) => {
              toast("Expense added in Expense list Successfully", {
                autoClose: 2000,
              });
            });

          return [...prevstate, { ...expenseData, token: res.name }];
        });
      })
      .catch((err) => {
        toast.error(err.message, {
          autoClose: 2000,
        });
      });
  };
  const deleteExpenseHandler = (newExpenseData, token) => {
    fetch(
      `https://expensetrackerdemo-4954a-default-rtdb.firebaseio.com/${testing}/${token}.json`,
      {
        method: "DELETE",
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("expense data did not deleted......try again");
        }
      })
      .then((res) => {
        setExpense(newExpenseData);
        toast.success("expense Deleted successfully", {
          autoClose: 2000,
        });
      })
      .catch((err) => {
        toast.error(err.message, {
          autoClose: 2000,
        });
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
    toast("expense successfully edited", {
      autoClose: 2000,
    });
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
