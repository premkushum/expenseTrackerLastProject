import { Fragment, useContext } from "react"
import ExpenseContext from "../../store/ExpenseContext"
import ExpenseDeleteButton from "./ExpenseDeleteButton"
import EditButton from "./editExpense/editButton"

const ExpensePrint=()=>{
const expenseCtx=useContext(ExpenseContext)
const newArray=expenseCtx.expenseItem.map((item)=>{
    return(<div style={{backgroundColor:"yellow" ,display :"flex",margin:"10px 200px"}} key={item.id}>
        <h3 style={{margin:"10px 250px 10px 200px"  }}>{item.name}</h3>
        <h3 style={{margin:"10px 250px 10px 10px"   }}>{item.amount}</h3>
        <h3 >{item.category}</h3>
        <ExpenseDeleteButton token={item.token}></ExpenseDeleteButton>
        <EditButton items={item}></EditButton>
    </div>)
})
    return(
        <Fragment>
        {newArray}
        </Fragment>

    )
}
export default ExpensePrint