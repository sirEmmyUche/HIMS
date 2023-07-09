import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
    const { auth } = useAuth();
    const location = useLocation();

    return (
        auth?.token
            ?  <Outlet />
            : <Navigate to="/Signup" state={{ from: location }} replace />
    );
}

export default RequireAuth;

{/* <Navigate to ="/dashboard"/> */}