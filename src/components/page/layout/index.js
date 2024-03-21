import "../../../static/admin/assets/plugins/bootstrap/css/bootstrap.min.css";
import "../../../static/admin/assets//plugins/chartist-js/dist/chartist.min.css";
import "../../../static/admin/assets//plugins/chartist-js/dist/chartist-init.css";
import "../../../static/admin/assets//plugins/chartist-plugin-tooltip-master/dist/chartist-plugin-tooltip.css";
import "../../../static/admin/assets//plugins/css-chart/css-chart.css";
import "../../../static/admin/assets//plugins/toast-master/css/jquery.toast.css";
import "../../../static/admin/css/style.css";
import "../../../static/admin/css/colors/blue.css";

import logoicon from "../../../static/admin/assets/images/logo-icon.png";
import logolighticon from "../../../static/admin/assets/images/logo-light-icon.png";
import logotext from "../../../static/admin/assets/images/logo-text.png";
import logolighttext from "../../../static/admin/assets/images/logo-light-text.png";
import profile from "../../../static/admin/assets/images/users/1.jpg";
import user from "../../../static/admin/assets/images/users/1.jpg";
import firstslide from "../../../static/admin/assets/images/big/img1.jpg";

import { Outlet, Link } from "react-router-dom";

const Index = () => {
    return (
        <body className="fix-header fix-sidebar card-no-border">
            <div id="main-wrapper">
                <header className="topbar">
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
                </header>
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
                <div className="page-wrapper">
                    <div className="container-fluid">
                        <div className="row page-titles">
                            <div className="col-md-6 col-8 align-self-center">
                                <h3 className="text-themecolor m-b-0 m-t-0">Dashboard</h3>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                                    <li className="breadcrumb-item active">Dashboard</li>
                                </ol>
                            </div>

                        </div>
                    </div>
                    <footer className="footer">
                        © 2017 Monster Admin by wrappixel.com
                    </footer>
                </div>
            </div>
            <script src="../../../static/admin/assets/plugins/jquery/jquery.min.js"></script>
            <script src="../../../static/admin/assets/plugins/bootstrap/js/popper.min.js"></script>
            <script src="../../../static/admin/assets/plugins/bootstrap/js/bootstrap.min.js"></script>
            <script src="../../../static/admin/js/jquery.slimscroll.js"></script>
            <script src="../../../static/admin/js/waves.js"></script>
            <script src="../../../static/admin/js/sidebarmenu.js"></script>
            <script src="../../../static/admin/assets/plugins/sticky-kit-master/dist/sticky-kit.min.js"></script>
            <script src="../../../static/admin/js/custom.min.js"></script>
            <script src="../../../static/admin/assets/plugins/chartist-js/dist/chartist.min.js"></script>
            <script src="../../../static/admin/assets/plugins/chartist-plugin-tooltip-master/dist/chartist-plugin-tooltip.min.js"></script>
            <script src="../../../static/admin/assets/plugins/echarts/echarts-all.js"></script>
            <script src="../../../static/admin/assets/plugins/toast-master/js/jquery.toast.js"></script>
            <script src="../../../static/admin/js/dashboard1.js"></script>
            <script src="../../../static/admin/js/toastr.js"></script>
            {/* <script>
                $.toast({
                    heading: 'Welcome to Monster admin',
                text: 'Use the predefined ones, or specify a custom position object.',
                position: 'top-right',
                loaderBg:'#ff6849',
                icon: 'info',
                hideAfter: 3000,
                stack: 6
        });
            </script> */}
            <script src="../../../static/admin/assets/plugins/styleswitcher/jQuery.style.switcher.js"></script>

        </body>
    )
}

export default Index;

