import { Outlet } from "react-router-dom";
import Nav from "../pages/nav.jsx"


function Header (){
    return(
        <div>
            <Nav/>
            <Outlet/>
        </div>
    )
}

export default  Header