import LoginForm from "./LoginForm"
const LoginFormPrint=()=>{
    return(
        <div style={{width:"200px",marginLeft:"300px ",marginTop:"200px",borderBlockStyle:"ridge"}}>
            <div style={{borderBlockStyle:"groove",marginBottom:"20px"}}>
                <LoginForm></LoginForm>
            </div>
            <div><button>HAVE AN ACCOUNT? LOGIN</button></div>
        </div>
    )
}
export default LoginFormPrint