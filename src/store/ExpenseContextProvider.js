import { useContext, useEffect, useReducer, useState } from "react";
import ExpenseContext from "./ExpenseContext";
import { toast } from "react-toastify";

const expenses=[];

const Reducerfn=(state,action)=>{
if(action.type=="ADD"){

  if (!state) {
    return [action.expenseData];
  }
  const existitem = state.find((item) => {
    console.log(item.token,action.expenseData.token,item.token === action.expenseData.token)
    return item.token === action.expenseData.token;
  });
  console.log(existitem);
  if (!existitem) {
   
    console.log("executed");
   
      console.log(state)
      return [...state, action.expenseData];
    
  }
}

if(action.type=="DEL"){

  const itemAfterDeletion = state.filter((item) => {
    return item.token !== action.token;
  });
  return itemAfterDeletion
  // fetch(
  //     `https://expensetrackerdemo-4954a-default-rtdb.firebaseio.com/${testing}/${action.token}.json`,
  //     {
  //       method: "DELETE",
  //     }
  //   )
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       } else {
  //         throw new Error("expense data did not deleted......try again");
  //       }
  //     })
  //     .then((res) => {
  //       const itemAfterDeletion = state.filter((item) => {
  //         return item.token !== action.token;
  //       });
  //       console.log(itemAfterDeletion);
      
  //       toast.success("expense Deleted successfully", {
  //         autoClose: 2000,
  //       });

  //       return itemAfterDeletion
  //     })
  //     .catch((err) => {
  //       toast.error(err.message, {
  //         autoClose: 2000,
  //       });
  //     });
}

if(action.type=="Edit"){
    const existingIndex =state.findIndex((item) => {
      return item.token === action.editData.token
    });
    // const existingItem = expenses[existingIndex];

    const updatedItem = { ...action.editData };

    const updatedItems = [...state];

    updatedItems[existingIndex] = updatedItem;
    // setExpense(updatedItems);
    toast("expense successfully edited", {
      autoClose: 2000,
    });
    return updatedItems
}
return state
}

const ExpenseContextProvider = (props) => {
  // const [expenses, setExpense] = useState([]);

const [state,dispatchFn]=useReducer(Reducerfn,expenses)

  const expenseHandler = (expenseData) => {
    // console.log(expenseData);
    // console.log(expenses)

    dispatchFn({type:"ADD",expenseData:expenseData})

    // const existitem = expenses.find((item) => {
    //   console.log(item)
    //   return item.id === expenseData.token;
    // });
    // console.log(existitem);
    // if (existitem == undefined) {
    //   console.log(expenses);
    //   console.log("executed");
    //   setExpense((prev) => {
    //     return [...prev, expenseData];
    //   });
    // }
  };
  const deleteExpenseHandler = (token) => {

    dispatchFn({type:"DEL",token:token})
 
  //   fetch(
  //     `https://expensetrackerdemo-4954a-default-rtdb.firebaseio.com/${testing}/${token}.json`,
  //     {
  //       method: "DELETE",
  //     }
  //   )
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       } else {
  //         throw new Error("expense data did not deleted......try again");
  //       }
  //     })
  //     .then((res) => {
  //       const itemAfterDeletion = expense.filter((item) => {
  //         return item.token !== token;
  //       });
  //       console.log(itemAfterDeletion);
  //       setExpense(itemAfterDeletion);
  //       toast.success("expense Deleted successfully", {
  //         autoClose: 2000,
  //       });
  //     })
  //     .catch((err) => {
  //       toast.error(err.message, {
  //         autoClose: 2000,
  //       });
  //     });
  };
  const editExpenseHandler = (editedExpenseData) => {

    dispatchFn({type:"Edit",editData:editedExpenseData})
  //   const existingIndex = expense.findIndex((item) => {
  //     return item.token === editedExpenseData.token;
  //   });
  //   const existingItem = expenses[existingIndex];

  //   const updatedItem = { ...editedExpenseData };

  //   const updatedItems = [...expenses];

  //   updatedItems[existingIndex] = updatedItem;
  //   setExpense(updatedItems);
  //   toast("expense successfully edited", {
  //     autoClose: 2000,
  //   });
  };

  console.log(state)
  const ExpenseContextHelper = {
    addExpense: expenseHandler,
    expenseItem: state,
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
