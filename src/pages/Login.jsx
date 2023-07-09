import { useState, useCallback, useEffect, useRef} from "react"
import useAuth from '../hooks/useAuth';
import { Link, useNavigate, useLocation, } from 'react-router-dom';
import { loginUser } from "../api.js"
import "../styles/login.css"


 function Login(){
  const useref = useRef(null)
  const {setAuth} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/dashboard";
  const [loginFormData, setLoginFormData] = useState({
    email:"",
    password:""
  })

  // const clearInputData = ()=>{
  //   useref.current.focus()
  // }
 
   const postLoginDataDetails = async ()=>{
    try{
      const data = await loginUser(loginFormData);
      localStorage.setItem("loggedin", true)
      let message = data.message
      let token = data.token
      let fName = data.firstName
      let lName = data.lastName
      // let fullName = data.firstName+""+data.lastName
      setAuth({token, message, fName, lName})
      // console.log(fullName)
      navigate(from, { replace: true });
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
        {/* <p className={message ? "errmsg" : "offscreen"} aria-live="assertive">{auth.message}</p> */}
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