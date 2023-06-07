import { useContext, useRef } from "react"
import ExpenseContext from "../../store/ExpenseContext"

const ExpenseForm=()=>{
    const expenseCtx=useContext(ExpenseContext)
    const nameRef=useRef()
    const AmountRef=useRef()
    const categoryRef=useRef()
    const formDataHandler=(event)=>{
        event.preventDefault();
          const myobj={
        name:nameRef.current.value,
        amount:AmountRef.current.value,
        category:categoryRef.current.value
    }
    expenseCtx.addExpense(myobj)
    }
  
    return(
        <form onSubmit={formDataHandler}>
            <input placeholder="description" type="text" ref={nameRef} required></input>
            <input placeholder="Amount" type="number" ref={AmountRef} required></input>
            <select ref={categoryRef}>
                <option>food</option>
                <option>petrol</option>
                <option>coffee</option>
            </select>
            <button>Submit</button>
        </form>
    )
}
export default ExpenseForm