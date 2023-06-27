import { Link } from "react-router-dom"
import "../../styles/profile.css"


function Profile (){
    return (
        <nav className="dashboard-nav">
            <div className="dashboard-profile-pic">
                <div className="profile-pic-box"><img src="/images/verify-pic.webp" alt="profile-pic"/></div>
                <p>Name of User</p>
            </div>
            <ul className="dashboard-nav-ul">
                <Link to={"/dashboard/verifyhouse"}>
                    <img src="/images/icon-menu.svg" alt="user profile-pic"/>
                    <li>Verify Home</li>
                </Link>
                    <Link to={"/dashboard/registerhouse"}>
                        <img src="/images/icon-menu.svg" alt="user profile-pic"/>
                        <li>Register Home</li>
                    </Link>
                <Link>
                    <img src="/images/icon-menu.svg" alt="user profile-pic"/>
                    <li>List Property</li>
                </Link>
                    <Link>
                    <img src="/images/icon-menu.svg" alt="user profile-pic"/>
                    <li>Settings</li>
                    </Link>
            </ul>
        </nav>
    )
}

export default Profile