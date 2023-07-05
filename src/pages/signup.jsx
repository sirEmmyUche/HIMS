import { useContext, useState } from "react"
import {Link} from "react-router-dom"
import "../styles/signup.css"



function Signup() {

  const handleSubmitForm = (event)=>{
    event.preventDefault();
  }
  return (
    <div id="login-wrapper">
        <div className="signup-form-wrapper">
          <h3>Create Account</h3>
          <form className="form-data" onSubmit={handleSubmitForm}>
          <label>
              First Name:<br/>
              <input type="text"/>
            </label>
            <label>
              Last Name:<br/>
              <input type="text"/>
            </label>
            <label>
              E-Mail:<br/>
              <input type="email"/>
            </label>
            <label>
              Password:<br/>
              <input type="password"/>
            </label>
            <input type="submit"/>
          </form>
          <div className="sigin-with-google-and-create-account-wrapper">
            <div className="singin-with-google-wrapper">
              <div className="google-icon-box"><img src="/images/google-icon.jfif"/></div>
              <p>Sign up with Google</p>
              </div>
            <div className="create-an-account">
             <Link to={"/Login"}>Have an account? Sign in</Link>
              </div>
          </div>
        </div>
    </div>
   
  )
}

export default Signup