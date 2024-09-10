import {Link} from "react-router-dom"
import { useState } from "react"
import '../styles/nav.css'


function Nav() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggleMenu = ()=>{
    setToggleMenu(!toggleMenu)
  }

  return (
    <nav className="home-pg-nav">
        <div className='logo'>
            <img src="/images/HIMS-logo.jfif" alt='logo'/>
            <div>HIMS</div>  
        </div>
        <ul id={toggleMenu?"phoneMenubar":null}>
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
            <li > 
              <Link to={"/Services"}>Service</Link>
            </li>
                {/* <li >
                  <Link to={"/Login"}>Login</Link>
                </li> */}
            <li>
              <Link to={"/"}>About</Link>
            </li>
        </ul>
        <div className="menubar">
          <img src="/images/icon-menu.svg" alt="menubar"onClick={handleToggleMenu} />
        </div>
     </nav>
   
  )
}

export default Nav