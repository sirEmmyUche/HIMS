import { Outlet } from "react-router-dom";
import Nav from "../pages/nav.jsx"
import Footer from "../pages/footer.jsx"


function Layout (){
    return(
        <div>
            <Nav/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Layout