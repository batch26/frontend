import { Link } from "react-router-dom";
import profile from "../../../../static/admin/assets/images/users/1.jpg";
const LeftSideBars = ()=>{
    return(
        <div>
        <aside className="left-sidebar">
        <div className="scroll-sidebar">
            <div className="user-profile">
                <div className="profile-img"> <img src={profile} alt="user" /> </div>
                <div className="profile-text"> <a href="#" className="dropdown-toggle link u-dropdown" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true">Markarn Doe <span className="caret"></span></a>
                    <div className="dropdown-menu animated flipInY">
                        <a href="#" className="dropdown-item"><i className="ti-user"></i> My Profile</a>
                        <a href="#" className="dropdown-item"><i className="ti-wallet"></i> My Balance</a>
                        <a href="#" className="dropdown-item"><i className="ti-email"></i> Inbox</a>
                        <div className="dropdown-divider"></div> <a href="#" className="dropdown-item"><i className="ti-settings"></i> Account Setting</a>
                        <div className="dropdown-divider"></div> <a href="login.html" className="dropdown-item"><i className="fa fa-power-off"></i> Logout</a>
                    </div>
                </div>
            </div>
            <nav className="sidebar-nav">
                <ul id="sidebarnav">
                    <li className="nav-small-cap">PERSONAL</li>
                    <li>
                        <Link to="/"><i className="mdi mdi-gauge"></i>Dashboard</Link>
                        {/* <a className="has-arrow " href="#" aria-expanded="false"><i className="mdi mdi-gauge"></i><span className="hide-menu">Inbox</span></a>
                        <ul aria-expanded="false" className="collapse">
                            <li><a href="app-email.html">Mailbox</a></li>
                            <li><a href="app-email-detail.html">Mailbox Detail</a></li>
                            <li><a href="app-compose.html">Compose Mail</a></li>
                        </ul> */}
                    </li>
                    <li>
                        <Link to="/demo"><i className="mdi mdi-gauge"></i>Demo</Link>
                    </li>
                    <li>
                        <Link to="/Rout"><i className="mdi mdi-gauge"></i>Route</Link>
                    </li>
                </ul>
            </nav>
        </div>
        <div className="sidebar-footer">
            <a href="" className="link" data-toggle="tooltip" title="Settings"><i className="ti-settings"></i></a>
            <a href="" className="link" data-toggle="tooltip" title="Email"><i className="mdi mdi-gmail"></i></a>
            <a href="" className="link" data-toggle="tooltip" title="Logout"><i className="mdi mdi-power"></i></a>
        </div>
    </aside>
        </div>
        
    )
}

export default LeftSideBars