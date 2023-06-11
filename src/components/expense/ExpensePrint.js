import { Fragment, useContext } from "react"
import ExpenseContext from "../../store/ExpenseContext"
import ExpenseDeleteButton from "./ExpenseDeleteButton"
import EditButton from "./editExpense/editButton"

const ExpensePrint=()=>{
const expenseCtx=useContext(ExpenseContext)
let total=0
const newArray=expenseCtx.expenseItem.map((item)=>{
    total=item.amount+total;
    return(<div style={{backgroundColor:"yellow" ,display :"flex",margin:"10px 200px"}} key={item.id}>
        <h3 style={{margin:"10px 250px 10px 200px"  }}>{item.name}</h3>
        <h3 style={{margin:"10px 250px 10px 10px"   }}>{item.amount}</h3>
        <h3 >{item.category}</h3>
        <ExpenseDeleteButton token={item.token}></ExpenseDeleteButton>
        <EditButton items={item}></EditButton>
    </div>)
})
const handleDownload = () => {
    const content = JSON.stringify(expenseCtx.expenseItem, null, 2)
    const blob = new Blob([content], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = "expense.json"
    link.click()
  }

    return(
        <Fragment>
        {newArray}
        {total>10000?<button>Activate premium</button>:""}
        <button onClick={handleDownload}>Download</button>
        </Fragment>

    )
}
export default ExpensePrint