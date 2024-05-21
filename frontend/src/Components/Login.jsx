import { Cancel } from '@mui/icons-material'
import React, { useState } from 'react'
import login from './login.css'

const Login = ({setShowLogin}) => {
    const [currState,setCurrState]=useState("Login")
  return (
    <div className='login-popup'>
        <form className='login-popup-container'>
        <div className='login-popup-title'>
            <h2>{currState}</h2>
            <Cancel onClick={()=>setShowLogin(false)} />
        </div>
        <div className='login-popup-inputs'>
            {currState ==="Login"?(
                    <></>
                ):(
                    <input type="text" placeholder='Your  Name' required/>
                ) }
                <input type="email" placeholder='Youe E-Mail' required />
                <input type="password" placeholder='Youe Password' required />
        </div>
        <button>{currState==="Sign Up"?"Create account":"Login"}</button>
        {currState==="Login"?(
            <p>create a new account?{""}
            <span onClick={()=>setCurrState("Sign Up")}>Click here</span>
            </p>
        ):(
            <p>Already have an account{""}
            <span onClick={()=>setCurrState("Login")}>Login here</span></p>
        )}
        </form>
      
    </div>
  )
}

export default Login;
