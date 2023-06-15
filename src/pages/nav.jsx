import {Link} from "react-router-dom"
import '../styles/nav.css'


function Nav() {
  return (
    <nav>
       <div className='logo'>
          <img src="/images/HIMS-logo.jfif" alt='logo'/> 
          <div>HIMS</div> 
      </div>
      <ul>
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
      <div className="menubar"><img src="/images/icon-menu.svg" alt="menubar" /></div>
     </nav>
   
  )
}

export default Nav