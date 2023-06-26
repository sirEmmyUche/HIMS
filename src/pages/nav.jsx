import {Link} from "react-router-dom"
import { useState } from "react"
import '../styles/nav.css'


function Nav() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggleMenu = ()=>{
    setToggleMenu(!toggleMenu)
  }

  return (
    <nav>
       <div className='logo'>
          <img src="/images/HIMS-logo.jfif" alt='logo'/> 
          <div>HIMS</div> 
      </div>
      <ul id={toggleMenu? "hidephoneMenubar" :"phoneMenubar"}>
        <li>
            Home
        </li>
        <li>
          Service
        </li>
        <li>
          About
        </li>
        <Link to={'/Login'}>
            <li>Login</li>
        </Link>
      </ul>
      <div className="menubar"><img 
      src="/images/icon-menu.svg" 
      alt="menubar"
      onClick={handleToggleMenu} /></div>
     </nav>
   
  )
}

export default Nav