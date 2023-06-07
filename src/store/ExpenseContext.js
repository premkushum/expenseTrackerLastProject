import { createContext } from "react";

const ExpenseContext=createContext({
    addExpense:()=>{},
    expenseItem: []
})
export default ExpenseContext