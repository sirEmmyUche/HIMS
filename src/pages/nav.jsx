import {Link} from "react-router-dom"
import { useState } from "react"
import '../styles/nav.css'


function Nav() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggleMenu = ()=>{
    setToggleMenu(!toggleMenu)
  }

  return (
    <nav className="home-nav">
       <div className='logo'>
          <img src="/images/HIMS-logo.jfif" alt='logo'/> 
          <div>HIMS</div> 
      </div>
      <ul id={toggleMenu? "hidephoneMenubar" :"phoneMenubar"}>
        <Link to={"/"}> <li>Home</li> </Link>
         <Link to={"/Services"}><li>Services</li></Link>
        <Link><li>About</li></Link>
        <Link to={'/Login'}><li>Login</li> </Link>
      </ul>
      <div className="menubar"><img 
      src="/images/icon-menu.svg" 
      alt="menubar"
      onClick={handleToggleMenu} /></div>
     </nav>
   
  )
}

export default Nav