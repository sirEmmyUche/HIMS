import {useState} from "react"
import {Link, useNavigate, useLocation,  } from "react-router-dom";
import { signUpUser } from "../api.js"
import "../styles/signup.css"

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from || "/Login";

  const [signupUserData,setSignupUserData] = useState({firstName:"",lastName:"",email:"",password:""});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const postSignupUserDetails = async ()=>{
    try{
      const res = await signUpUser(signupUserData);
      const token = res.token;
      let message = res.message;
      if(!token){
        setErrMsg({message})
        setIsSubmitting(false)
      }
      if(token){
        navigate(from, { replace: true });
      }
    }catch(err){
      console.log(err)
      setIsSubmitting(false)
    }
  }

  const handleSignupUserData = (e)=>{
    setSignupUserData((prev)=>{ return {...prev,[e.target.name]:e.target.value}})
  }

  const handleSubmitForm = (event)=>{
    event.preventDefault();
    setIsSubmitting(true);
    postSignupUserDetails();
  }
  return (
    <div id="login-wrapper">
        <div className="signup-form-wrapper">
        <p className={errMsg.message?"error-msg":null}>{errMsg.message}</p>
          <h3>Create Account</h3>
          <form className="form-data" onSubmit={handleSubmitForm}>
          <label>
              First Name:<br/>
              <input type="text"
              required
              placeholder="First Name"
              name="firstName"
              value={signupUserData.firstName}
              onChange={handleSignupUserData}/>
            </label>

            <label>
              Last Name:<br/>
              <input type="text"
              required
              placeholder="surname"
              name="lastName"
              value={signupUserData.lastName}
              onChange={handleSignupUserData}/>
            </label>

            <label>
              E-Mail:<br/>
              <input type="email"
              required
              placeholder="example@gmail.com"
              name="email"
              value={signupUserData.email}
              onChange={handleSignupUserData}/>
            </label>

            <label>
              Password:<br/>
              <input type="password"
              required
              placeholder="password"
              name="password"
              value={signupUserData.password}
              onChange={handleSignupUserData}/>
            </label>
            <div className="login-submit-btn">
              <button
              type="submit" 
              disabled={isSubmitting}>
                {isSubmitting?"Submitting...":"Submit"}
              </button></div>
          </form>
          <div className="sigin-with-google-and-create-account-wrapper">
            {/* <div className="singin-with-google-wrapper">
              <div className="google-icon-box"><img src="/images/google-icon.jfif"/></div>
              <a href="https://housing-84si.onrender.com/auth/google">Sign Up with Google</a>
              </div> */}
            <div className="create-an-account">
             <Link to={"/Login"}>Have an account? Sign in</Link>
              </div>
          </div>
        </div>
    </div>
   
  )
}

export default Signup