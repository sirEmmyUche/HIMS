import { Link } from "react-router-dom"
import {useState} from "react";
import "../../styles/profile.css";
import useAuth from '../../hooks/useAuth';


function Profile (){
    const {auth} = useAuth();
    const [toggleMenu, setToggleMenu] = useState(false);

    const handleToggleMenu = ()=>{
        setToggleMenu(!toggleMenu)
    }
        
    return (
        <nav id="dashboard-nav">
            <div className="dashboard-profile-pic">
                <div className="profile-pic-box">
                    <img src="/images/HIMS-logo.jfif" alt="Logo"/>
                </div>
                <p>{auth.fName}</p>
            </div>

            <ul className={toggleMenu?"dashboard-nav-ul":null}>
                
                    <div className="dashboard-icon-wrapper">
                        <div className="icon-pic-box">
                            <img src="/images/arc-de-triomphe.svg" alt="user profile-pic"/>
                        </div>
                        <li>
                            <Link to={"/dashboard/verifyhouse"}>Verify Home</Link>
                        </li>
                    </div>

                        <div className="dashboard-icon-wrapper">
                            <div className="icon-pic-box"><img src="/images/statue-of-liberty.svg" alt="user profile-pic"/></div>
                            <li><Link to={"/dashboard/registerhouse"}>Register Home </Link></li>
                        </div>

                    <div className="dashboard-icon-wrapper">
                        <div className="icon-pic-box"><img src="/images/settings.svg" alt="settings-icon"/></div>
                        <li><Link>Settings</Link></li>
                    </div>
            </ul>
            <div className="profile-menu-bar">
                <img src="/images/icon-menu.svg" alt="menu-bar" onClick={handleToggleMenu}/>
            </div>
        </nav>
    )
}

export default Profile