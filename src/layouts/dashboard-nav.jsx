import { Outlet } from "react-router-dom";
import DashboardLayout from "../pages/dashboard/profile.jsx"


function Dashboard_Profile_Layout(){
    return(
        <div>
            <DashboardLayout/>
            <Outlet/>
        </div>
    )
}

export default Dashboard_Profile_Layout