import { useState, useEffect, useRef} from "react"
import useAuth from '../hooks/useAuth';
import { Link, useNavigate, useLocation, } from 'react-router-dom';
import { loginUser } from "../api.js"
import "../styles/login.css"


 function Login(){
  const useref = useRef(null)
  const {auth, setAuth} = useAuth();
  const navigate = useNavigate();
  const location = useLocation(); 
  const from = location.state?.from || "/dashboard";
  const [loginFormData, setLoginFormData] = useState({email:"",password:""}) 

  const googleLogin = async ()=>{
    try {
      const response = await fetch('http://localhost:3000/auth/google/',{
        method: "get"
      });
      const redirectUrl  = await response.json();
      console.log(redirectUrl)
    } catch (error) {
      console.log(error);
    }
  }

   const postLoginDataDetails = async ()=>{
    try{
      const data = await loginUser(loginFormData);
      localStorage.setItem("loggedin", true)
      let status = data.status
      let message = data.message
      let token = data.token
      let fName = data.firstName
      if(status != 200){
        setAuth({message})
      }
      if(token){
        setAuth({token, message, fName})
      navigate(from, { replace: true });
      }
    }catch(err){
      console.log(err)
    }
  }

  const handleLoginFormData = (e)=>{
    setLoginFormData((prev)=>{
      return {...prev, 
        [e.target.name]:e.target.value
      }
    })
  }

  const handleSubmitForm = (event)=>{
    event.preventDefault();
    postLoginDataDetails();
  }
  return (
    <div id="login-wrapper">
        <div className="form-wrapper">
        <p className={auth.message?"error-msg":null}>{auth.message}</p>
          <h3>Sign In</h3>
          <form className="form-data" onSubmit={handleSubmitForm}>
            <label>
              E-Mail:<br/>
              <input type="email"
              required
              ref={useref}
              placeholder="example@gmail.com"
              name="email"
              value={loginFormData.email}
              onChange={handleLoginFormData}
              />
            </label>
            <label>
              Password:<br/>
              <input type="password"
              required
              ref={useref}
              placeholder="enter password"
              name="password"
              value={loginFormData.password}
              onChange={handleLoginFormData}/>
            </label>
            <input type="submit"/>
          </form>
          <div className="sigin-with-google-and-create-account-wrapper">
            <div className="singin-with-google-wrapper">
              <div className="google-icon-box"><img src="/images/google-icon.jfif"/></div>
              <p onClick={googleLogin}>Sign In with Google</p>
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