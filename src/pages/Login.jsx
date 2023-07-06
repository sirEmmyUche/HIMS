import { useState, useCallback, useEffect } from "react"
import useAuth from '../hooks/useAuth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import "../styles/login.css"


 function Login(){
  const {setAuth} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [loginFormData, setLoginFormData] = useState({
    email:"",
    password:""
  })
  const [errMsg, setErrMsg] = useState('');

  
  useEffect(() => {
    setErrMsg('');
},[loginFormData])

  const handleLoginFormData = (e)=>{
    setLoginFormData((prev)=>{
      return {...prev, 
        [e.target.name]:e.target.value
      }
    })
  }

  const postLoginDataDetails = useCallback(()=>{
    try{
      const loginData = async ()=>{
        const data = await fetch("http://localhost:3000/login", {
           method:"post",
           headers:{"content-type":"application/json"},
           body:JSON.stringify(loginFormData)
         })
         const response = await data.json()
         const accessToken = response?.token;
         const userFirstName = response?.firstName;
         const userLastName = response?.lastName;
         setAuth({userFirstName, userLastName, accessToken});
        //  console.log(Auth)
         navigate(from, { replace: true });
       }
       loginData();
    }catch(err){
      if(!err?.response){setErrMsg('No Server Response');}
      if (err.response?.status === 404){setErrMsg('Missing Username or Password');}
    }
   
  },[loginFormData])
  // console.log(Auth)

  const handleSubmitForm = (event)=>{
    event.preventDefault();
    postLoginDataDetails();
  }
  return (
    <div id="login-wrapper">
        <div className="form-wrapper">
        <p className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
          <h3>Sign In</h3>
          <form className="form-data" onSubmit={handleSubmitForm}>
            <label>
              E-Mail:<br/>
              <input type="email"
              required
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