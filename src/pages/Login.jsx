import { useState, useRef,} from "react"
import { Link, useNavigate, useLocation, } from 'react-router-dom';
import { loginUser } from "../api.js"
import "../styles/login.css"


 function Login(){
  const useref = useRef(null)

  const navigate = useNavigate();
  const location = useLocation(); 

  const from = location.state?.from || "/dashboard";
  const [loginFormData, setLoginFormData] = useState({email:"",password:""}) 
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errMsg, setErrMsg] = useState("");


   const postLoginDataDetails = async ()=>{
    try{
      setIsSubmitting(true);
      const data = await loginUser(loginFormData);
      let status = data.status;
      let message = data.message;
      let token = data.token;

      if(status != 200){
        setErrMsg({message})
        setIsSubmitting(false)
      }
      if(token){
        localStorage.setItem("token", JSON.stringify(token));
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
        <p className={errMsg.message?"error-msg":null}>{errMsg.message}</p>
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
            <div className="login-submit-btn">
              <button
              type="submit" 
              disabled={isSubmitting}>
                {isSubmitting?"Signing In...":"Log In"}
              </button></div>
          </form>
          <div className="sigin-with-google-and-create-account-wrapper">
            <div className="singin-with-google-wrapper">
              <div className="google-icon-box"><img src="/images/google-icon.jfif"/></div>
              <a href="https://housing-84si.onrender.com/auth/google">Sign In with Google</a>
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