import { useContext, useState } from "react"
import {Link} from "react-router-dom"
import "../styles/login.css"



function Login() {

  const handleSubmitForm = (event)=>{
    event.preventDefault();
  }
  return (
    <div id="login-wrapper">
        <div className="form-wrapper">
          <h3>Sign In</h3>
          <form className="form-data" onSubmit={handleSubmitForm}>
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
              <p>Sign In with Google</p>
              </div>
            <div className="create-an-account">
             <Link to={"/Signup"}>Create an Account</Link>
              </div>
          </div>
        </div>
    </div>
   
  )
}

export default Login