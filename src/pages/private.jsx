import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Cookies from 'js-cookie';
import useAuth from "../hooks/useAuth";
import { verifyCookiesToken } from "../api";


const RequireAuth = () => {
  const { auth, setAuth } = useAuth();
  const [errMsg, setErrMsg] = useState("");
  const [loading, setIsLoading] = useState(false)
  
  useEffect(() => {
    const verifyToken = async () => {
      try {
        const token = Cookies.get('token');
        if (!token || token === undefined){ 
          const searchLocalStoreToken = JSON.parse(localStorage.getItem("token"));
          if(!searchLocalStoreToken ||searchLocalStoreToken===undefined){
            setErrMsg("Unauthorized User, Please Sign up.");
            setIsLoading(false);
          return;
          }
          if(searchLocalStoreToken){
            setIsLoading(true);
            const verifyUser = await verifyCookiesToken(searchLocalStoreToken);
            let fName = verifyUser.username;
            let userId = verifyUser.userId;
            let username = fName.charAt(0).toUpperCase() + fName.slice(1).toLowerCase();
            setAuth({ username, userId });
            return;
          }
        }
        if (token) {
          setIsLoading(true);
          const userToken = await verifyCookiesToken(token);
          let username = userToken.username;
          let userId = userToken.userId;
          setAuth({username, userId });
        }
      } catch (err) {
        console.log(err);
        setErrMsg(err.message);
      }
    };

    verifyToken(); 

  }, [setAuth]);

  return (
     auth.username ||auth.userId ? (
      <Outlet />
    ) : (
      <div>
        <h1>{errMsg}</h1>
        <p><Link to={"/Signup"}>{loading? "loading...":"Go to Sign-Up Page"}</Link></p>
      </div>
    )
  );
}

export default RequireAuth;
