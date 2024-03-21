import logoicon from "../../../../static/admin/assets/images/logo-icon.png";
import logolighticon from "../../../../static/admin/assets/images/logo-light-icon.png";
import logotext from "../../../../static/admin/assets/images/logo-text.png";
import logolighttext from "../../../../static/admin/assets/images/logo-light-text.png";    
import user from "../../../../static/admin/assets/images/users/1.jpg";
import "../../../../static/admin/assets/plugins/bootstrap/css/bootstrap.min.css";
import "../../../../static/admin/assets//plugins/chartist-js/dist/chartist.min.css";
import "../../../../static/admin/assets//plugins/chartist-js/dist/chartist-init.css";
import "../../../../static/admin/assets//plugins/chartist-plugin-tooltip-master/dist/chartist-plugin-tooltip.css";
import "../../../../static/admin/assets//plugins/css-chart/css-chart.css";
import "../../../../static/admin/assets//plugins/toast-master/css/jquery.toast.css";
import "../../../../static/admin/css/style.css";
import "../../../../static/admin/css/colors/blue.css";
const NavbarAdmin = ()=>{
    return(
        <nav className="navbar top-navbar navbar-expand-md navbar-light">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="index.html">
                                <b>
                                    <i className="wi wi-sunset"></i>
                                    <img src={logoicon} alt="homepage" className="dark-logo" />
                                    <img src={logolighticon} alt="homepage" className="light-logo" />
                                </b>
                                <span>
                                    <img src={logotext} alt="homepage" className="dark-logo" />
                                    <img src={logolighttext} className="light-logo" alt="homepage" /></span>
                            </a>
                        </div>
                        <div className="navbar-collapse">
                            <ul className="navbar-nav mr-auto mt-md-0 ">
                                <li className="nav-item"> <a className="nav-link nav-toggler hidden-md-up text-muted waves-effect waves-dark" href="javascript:void(0)"><i className="ti-menu"></i></a>
                                </li>
                                <li className="nav-item"> <a className="nav-link sidebartoggler hidden-sm-down text-muted waves-effect waves-dark" href="javascript:void(0)"><i className="icon-arrow-left-circle"></i></a>
                                </li>

                            </ul>
                            <ul className="navbar-nav my-lg-0">
                                <li className="nav-item hidden-sm-down">
                                    <form className="app-search">
                                        <input type="text" className="form-control" placeholder="Search for..." /> <a className="srh-btn"><i className="ti-search"></i></a> </form>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-muted waves-effect waves-dark" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src={user} alt="user" className="profile-pic" /></a>
                                    <div className="dropdown-menu dropdown-menu-right animated flipInY">
                                        <ul className="dropdown-user">
                                            <li>
                                                <div className="dw-user-box">
                                                    <div className="u-img"><img src={user} alt="user" /></div>
                                                    <div className="u-text">
                                                        <h4>Steave Jobs</h4>
                                                        <p className="text-muted">varun@gmail.com</p><a href="profile.html" className="btn btn-rounded btn-danger btn-sm">View Profile</a></div>
                                                </div>
                                            </li>
                                            <li role="separator" className="divider"></li>
                                            <li><a href="#"><i className="ti-user"></i> My Profile</a></li>
                                            <li><a href="#"><i className="ti-wallet"></i> My Balance</a></li>
                                            <li><a href="#"><i className="ti-email"></i> Inbox</a></li>
                                            <li role="separator" className="divider"></li>
                                            <li><a href="#"><i className="ti-settings"></i> Account Setting</a></li>
                                            <li role="separator" className="divider"></li>
                                            <li><a href="#"><i className="fa fa-power-off"></i> Logout</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-muted waves-effect waves-dark" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="flag-icon flag-icon-us"></i></a>
                                    <div className="dropdown-menu  dropdown-menu-right animated bounceInDown"> <a className="dropdown-item" href="#"><i className="flag-icon flag-icon-in"></i> India</a> <a className="dropdown-item" href="#"><i className="flag-icon flag-icon-fr"></i> French</a> <a className="dropdown-item" href="#"><i className="flag-icon flag-icon-cn"></i> China</a> <a className="dropdown-item" href="#"><i className="flag-icon flag-icon-de"></i> Dutch</a> </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
    )
}

export default NavbarAdmin