import SignUpForm from "./SignUp"
const SignUpFormPrint=()=>{
    return(
        <div style={{width:"200px",marginLeft:"300px ",marginTop:"200px",borderBlockStyle:"ridge"}}>
            <div style={{borderBlockStyle:"groove",marginBottom:"20px"}}>
                <SignUpForm></SignUpForm>
            </div>
            <div><button>HAVE AN ACCOUNT? LOGIN</button></div>
        </div>
    )
}
export default SignUpFormPrint