import { Link } from "react-router-dom"
import "../../styles/profile.css"
import useAuth from '../../hooks/useAuth';


function Profile (){
    const {auth} = useAuth();
    return (
        <nav className="dashboard-nav"  >
            <div className="profile-menu-bar"><img src="/images/icon-menu.svg" alt="menu-bar"/></div>

            <div id ="ul-wrapper">
            <div className="dashboard-profile-pic">
                <div className="profile-pic-box"><img src="/images/parthenon.svg" alt="profile-pic"/></div>
                <p>{auth.fName}</p>
            </div>
            <ul className="dashboard-nav-ul">
                
                <Link to={"/dashboard/verifyhouse"}>
                    <div className="dashboard-icon-wrapper">
                        <div className="icon-pic-box"><img src="/images/arc-de-triomphe.svg" alt="user profile-pic"/></div>
                        <li>Verify Home</li>
                    </div>
                </Link>

                    <Link to={"/dashboard/registerhouse"}>
                        <div className="dashboard-icon-wrapper">
                            <div  className="icon-pic-box"><img src="/images/statue-of-liberty.svg" alt="user profile-pic"/></div>
                            <li>Register Home</li>
                        </div>
                    </Link>

                <Link>
                <div className="dashboard-icon-wrapper">
                    <div  className="icon-pic-box"><img src="/images/eiffel-tower.svg" alt="user profile-pic"/></div>
                    <li>List Property</li>
                </div>
                </Link>

                 <Link>
                    <div className="dashboard-icon-wrapper">
                        <div className="icon-pic-box"><img src="/images/settings.svg" alt="settings-icon"/></div>
                        <li>Settings</li>
                    </div>
                </Link>
            </ul>
            </div>
        </nav>
    )
}

export default Profile