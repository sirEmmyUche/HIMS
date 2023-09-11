import { useEffect, useState } from "react";
import { useLocation, Navigate, Outlet,Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
    const { auth, setAuth } = useAuth();
    const [errMsg, setErrMsg] = useState("")
    //const location = useLocation();
    useEffect(()=>{
        const verifyToken = async()=>{
            try{
                const getToken = JSON.parse(localStorage.getItem("accessToken"));
                if(!getToken){
                    //console.log("Token not found")
                    setErrMsg("Token Found Please SignUp or LogIn if already have an account")
                }
                const verifyUser = await fetch("http://localhost:3000/verifyToken", {
                    method:"get",
                    headers:{
                        Accept:"application/json",
                        Authorization: `Bearer ${getToken}`,
                    },
                })
                if(verifyUser.status === 200){
                    const result = await verifyUser.json();
                    console.log(result)
                    let username = result.username;
                    let userId = result.userId
                    let fName = username.charAt(0).toUpperCase() + username.slice(1).toLowerCase();
                    console.log(fName);
                    setAuth({fName, userId})
                }else{
                    setErrMsg("Token verification failed")
                    //console.log("Token verification failed");
                }
            }catch(err){
                //console.log(err)
                let message = verifyUser.message;
                setErrMsg(message)
            }
        }
        verifyToken()
      }, [])

      return (
        auth.fname || auth.userId ? (
          <Outlet />
        ) : (
          <div>
            <h1>{errMsg}</h1>
            <p><Link to={"/Signup"}> Go to SignUp Page</Link></p>
            {/* <Navigate to="/Signup" state={{ from: location }} replace /> */}
          </div>
        )
      );
      
}

export default RequireAuth;
