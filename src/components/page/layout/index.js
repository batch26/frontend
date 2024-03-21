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
                                    <img src={logolighttext} className="light-logo" alt="homepage" /></span> </a>
                        </div>
                        <div className="navbar-collapse">
                            <ul className="navbar-nav mr-auto mt-md-0 ">
                                <li className="nav-item"> <a className="nav-link nav-toggler hidden-md-up text-muted waves-effect waves-dark" href="javascript:void(0)"><i className="ti-menu"></i></a> </li>
                                <li className="nav-item"> <a className="nav-link sidebartoggler hidden-sm-down text-muted waves-effect waves-dark" href="javascript:void(0)"><i className="icon-arrow-left-circle"></i></a> </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-muted text-muted waves-effect waves-dark" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="mdi mdi-message"></i>
                                        <div className="notify"> <span className="heartbit"></span> <span className="point"></span> </div>
                                    </a>
                                    <div className="dropdown-menu mailbox animated bounceInDown">
                                        <ul>
                                            <li>
                                                <div className="drop-title">Notifications</div>
                                            </li>
                                            <li>
                                                <div className="message-center">
                                                    <a href="#">
                                                        <div className="btn btn-danger btn-circle"><i className="fa fa-link"></i></div>
                                                        <div className="mail-contnet">
                                                            <h5>Luanch Admin</h5> <span className="mail-desc">Just see the my new admin!</span> <span className="time">9:30 AM</span> </div>
                                                    </a>
                                                    <a href="#">
                                                        <div className="btn btn-success btn-circle"><i className="ti-calendar"></i></div>
                                                        <div className="mail-contnet">
                                                            <h5>Event today</h5> <span className="mail-desc">Just a reminder that you have event</span> <span className="time">9:10 AM</span> </div>
                                                    </a>
                                                    <a href="#">
                                                        <div className="btn btn-info btn-circle"><i className="ti-settings"></i></div>
                                                        <div className="mail-contnet">
                                                            <h5>Settings</h5> <span className="mail-desc">You can customize this template as you want</span> <span className="time">9:08 AM</span> </div>
                                                    </a>
                                                    <a href="#">
                                                        <div className="btn btn-primary btn-circle"><i className="ti-user"></i></div>
                                                        <div className="mail-contnet">
                                                            <h5>Pavan kumar</h5> <span className="mail-desc">Just see the my admin!</span> <span className="time">9:02 AM</span> </div>
                                                    </a>
                                                </div>
                                            </li>
                                            <li>
                                                <a className="nav-link text-center" href="javascript:void(0);"> <strong>Check all notifications</strong> <i className="fa fa-angle-right"></i> </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-muted waves-effect waves-dark" href="" id="2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="mdi mdi-email"></i>
                                        <div className="notify"> <span className="heartbit"></span> <span className="point"></span> </div>
                                    </a>
                                    <div className="dropdown-menu mailbox animated bounceInDown" aria-labelledby="2">
                                        <ul>
                                            <li>
                                                <div className="drop-title">You have 4 new messages</div>
                                            </li>
                                            <li>
                                                <div className="message-center">
                                                    <a href="#">
                                                        <div className="user-img"> <img src="../../../static/admin/assets/images/users/1.jpg" alt="user" className="img-circle" /><span className="profile-status online pull-right"></span> </div>
                                                        <div className="mail-contnet">
                                                            <h5>Pavan kumar</h5> <span className="mail-desc">Just see the my admin!</span> <span className="time">9:30 AM</span> </div>
                                                    </a>
                                                    <a href="#">
                                                        <div className="user-img"> <img src="../../../static/admin/assets/images/users/2.jpg" alt="user" className="img-circle" /><span className="profile-status busy pull-right"></span> </div>
                                                        <div className="mail-contnet">
                                                            <h5>Sonu Nigam</h5> <span className="mail-desc">I've sung a song! See you at</span> <span className="time">9:10 AM</span> </div>
                                                    </a>
                                                    <a href="#">
                                                        <div className="user-img"> <img src="../../../static/admin/assets/images/users/3.jpg" alt="user" className="img-circle" /> <span className="profile-status away pull-right"></span> </div>
                                                        <div className="mail-contnet">
                                                            <h5>Arijit Sinh</h5> <span className="mail-desc">I am a singer!</span> <span className="time">9:08 AM</span> </div>
                                                    </a>
                                                    <a href="#">
                                                        <div className="user-img"> <img src="../../../static/admin/assets/images/users/4.jpg" alt="user" className="img-circle" /> <span className="profile-status offline pull-right"></span> </div>
                                                        <div className="mail-contnet">
                                                            <h5>Pavan kumar</h5> <span className="mail-desc">Just see the my admin!</span> <span className="time">9:02 AM</span> </div>
                                                    </a>
                                                </div>
                                            </li>
                                            <li>
                                                <a className="nav-link text-center" href="javascript:void(0);"> <strong>See all e-Mails</strong> <i className="fa fa-angle-right"></i> </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item dropdown mega-dropdown"> <a className="nav-link dropdown-toggle text-muted waves-effect waves-dark" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="mdi mdi-view-grid"></i></a>
                                    <div className="dropdown-menu animated bounceInDown">
                                        <ul className="mega-dropdown-menu row">
                                            <li className="col-lg-3 col-xlg-2 m-b-30">
                                                <h4 className="m-b-20">CAROUSEL</h4>
                                                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                                    <div className="carousel-inner" role="listbox">
                                                        <div className="carousel-item active">
                                                            <div className="container"> <img className="d-block img-fluid" src={firstslide} alt="First slide" /></div>
                                                        </div>
                                                        <div className="carousel-item">
                                                            <div className="container"><img className="d-block img-fluid" src="../../../static/admin/assets/images/big/img2.jpg" alt="Second slide" /></div>
                                                        </div>
                                                        <div className="carousel-item">
                                                            <div className="container"><img className="d-block img-fluid" src="../../../static/admin/assets/images/big/img3.jpg" alt="Third slide" /></div>
                                                        </div>
                                                    </div>
                                                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev"> <span className="carousel-control-prev-icon" aria-hidden="true"></span> <span className="sr-only">Previous</span> </a>
                                                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next"> <span className="carousel-control-next-icon" aria-hidden="true"></span> <span className="sr-only">Next</span> </a>
                                                </div>
                                            </li>
                                            <li className="col-lg-3 m-b-30">
                                                <h4 className="m-b-20">ACCORDION</h4>
                                                <div id="accordion" className="nav-accordion" role="tablist" aria-multiselectable="true">
                                                    <div className="card">
                                                        <div className="card-header" role="tab" id="headingOne">
                                                            <h5 className="mb-0">
                                                                <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                                    Collapsible Group Item #1
                                                                </a>
                                                            </h5> </div>
                                                        <div id="collapseOne" className="collapse show" role="tabpanel" aria-labelledby="headingOne">
                                                            <div className="card-body"> Anim pariatur cliche reprehenderit, enim eiusmod high. </div>
                                                        </div>
                                                    </div>
                                                    <div className="card">
                                                        <div className="card-header" role="tab" id="headingTwo">
                                                            <h5 className="mb-0">
                                                                <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                                    Collapsible Group Item #2
                                                                </a>
                                                            </h5> </div>
                                                        <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo">
                                                            <div className="card-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div>
                                                        </div>
                                                    </div>
                                                    <div className="card">
                                                        <div className="card-header" role="tab" id="headingThree">
                                                            <h5 className="mb-0">
                                                                <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                                    Collapsible Group Item #3
                                                                </a>
                                                            </h5> </div>
                                                        <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree">
                                                            <div className="card-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="col-lg-3  m-b-30">
                                                <h4 className="m-b-20">CONTACT US</h4>
                                                <form>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="exampleInputname1" placeholder="Enter Name" /> </div>
                                                    <div className="form-group">
                                                        <input type="email" className="form-control" placeholder="Enter email" /> </div>
                                                    <div className="form-group">
                                                        <textarea className="form-control" id="exampleTextarea" rows="3" placeholder="Message"></textarea>
                                                    </div>
                                                    <button type="submit" className="btn btn-info">Submit</button>
                                                </form>
                                            </li>
                                            <li className="col-lg-3 col-xlg-4 m-b-30">
                                                <h4 className="m-b-20">List style</h4>
                                                <ul className="list-style-none">
                                                    <li><a href="javascript:void(0)"><i className="fa fa-check text-success"></i> You can give link</a></li>
                                                    <li><a href="javascript:void(0)"><i className="fa fa-check text-success"></i> Give link</a></li>
                                                    <li><a href="javascript:void(0)"><i className="fa fa-check text-success"></i> Another Give link</a></li>
                                                    <li><a href="javascript:void(0)"><i className="fa fa-check text-success"></i> Forth link</a></li>
                                                    <li><a href="javascript:void(0)"><i className="fa fa-check text-success"></i> Another fifth link</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
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
                                    <a className="has-arrow" href="#" aria-expanded="false"><i className="mdi mdi-gauge"></i><span className="hide-menu">Dashboard <span className="label label-rounded label-success">5</span></span></a>
                                    <ul aria-expanded="false" className="collapse">
                                        <li><a href="index.html">Modern Dashboard</a></li>
                                        <li><a href="index2.html">Awesome Dashboard</a></li>
                                        <li><a href="index3.html">classNamey Dashboard</a></li>
                                        <li><a href="index4.html">Analytical Dashboard</a></li>
                                        <li><a href="index5.html">Minimal Dashboard</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a className="has-arrow " href="#" aria-expanded="false"><i className="mdi mdi-bullseye"></i><span className="hide-menu">Apps</span></a>
                                    <ul aria-expanded="false" className="collapse">
                                        <li><a href="app-calendar.html">Calendar</a></li>
                                        <li><a href="app-chat.html">Chat app</a></li>
                                        <li><a href="app-ticket.html">Support Ticket</a></li>
                                        <li><a href="app-contact.html">Contact / Employee</a></li>
                                        <li><a href="app-contact2.html">Contact Grid</a></li>
                                        <li><a href="app-contact-detail.html">Contact Detail</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a className="has-arrow " href="#" aria-expanded="false"><i className="mdi mdi-email"></i><span className="hide-menu">Inbox</span></a>
                                    <ul aria-expanded="false" className="collapse">
                                        <li><a href="app-email.html">Mailbox</a></li>
                                        <li><a href="app-email-detail.html">Mailbox Detail</a></li>
                                        <li><a href="app-compose.html">Compose Mail</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a className="has-arrow" href="#" aria-expanded="false"><i className="mdi mdi-chart-bubble"></i><span className="hide-menu">Ui Elements</span></a>
                                    <ul aria-expanded="false" className="collapse">
                                        <li><a href="ui-cards.html">Cards</a></li>
                                        <li><a href="ui-user-card.html">User Cards</a></li>
                                        <li><a href="ui-buttons.html">Buttons</a></li>
                                        <li><a href="ui-modals.html">Modals</a></li>
                                        <li><a href="ui-tab.html">Tab</a></li>
                                        <li><a href="ui-tooltip-popover.html">Tooltip &amp; Popover</a></li>
                                        <li><a href="ui-tooltip-stylish.html">Tooltip stylish</a></li>
                                        <li><a href="ui-sweetalert.html">Sweet Alert</a></li>
                                        <li><a href="ui-notification.html">Notification</a></li>
                                        <li><a href="ui-progressbar.html">Progressbar</a></li>
                                        <li><a href="ui-nestable.html">Nestable</a></li>
                                        <li><a href="ui-range-slider.html">Range slider</a></li>
                                        <li><a href="ui-timeline.html">Timeline</a></li>
                                        <li><a href="ui-typography.html">Typography</a></li>
                                        <li><a href="ui-horizontal-timeline.html">Horizontal Timeline</a></li>
                                        <li><a href="ui-session-timeout.html">Session Timeout</a></li>
                                        <li><a href="ui-session-ideal-timeout.html">Session Ideal Timeout</a></li>
                                        <li><a href="ui-bootstrap.html">Bootstrap Ui</a></li>
                                        <li><a href="ui-breadcrumb.html">Breadcrumb</a></li>
                                        <li><a href="ui-bootstrap-switch.html">Bootstrap Switch</a></li>
                                        <li><a href="ui-list-media.html">List Media</a></li>
                                        <li><a href="ui-ribbons.html">Ribbons</a></li>
                                        <li><a href="ui-grid.html">Grid</a></li>
                                        <li><a href="ui-carousel.html">Carousel</a></li>
                                        <li><a href="ui-date-paginator.html">Date-paginator</a></li>
                                        <li><a href="ui-dragable-portlet.html">Dragable Portlet</a></li>
                                    </ul>
                                </li>
                                <li className="nav-devider"></li>
                                <li className="nav-small-cap">FORMS, TABLE &amp; WIDGETS</li>
                                <li>
                                    <a className="has-arrow" href="#" aria-expanded="false"><i className="mdi mdi-file"></i><span className="hide-menu">Forms</span></a>
                                    <ul aria-expanded="false" className="collapse">
                                        <li><a href="form-basic.html">Basic Forms</a></li>
                                        <li><a href="form-layout.html">Form Layouts</a></li>
                                        <li><a href="form-addons.html">Form Addons</a></li>
                                        <li><a href="form-material.html">Form Material</a></li>
                                        <li><a href="form-float-input.html">Floating Lable</a></li>
                                        <li><a href="form-pickers.html">Form Pickers</a></li>
                                        <li><a href="form-upload.html">File Upload</a></li>
                                        <li><a href="form-mask.html">Form Mask</a></li>
                                        <li><a href="form-validation.html">Form Validation</a></li>
                                        <li><a href="form-dropzone.html">File Dropzone</a></li>
                                        <li><a href="form-icheck.html">Icheck control</a></li>
                                        <li><a href="form-img-cropper.html">Image Cropper</a></li>
                                        <li><a href="form-bootstrapwysihtml5.html">HTML5 Editor</a></li>
                                        <li><a href="form-typehead.html">Form Typehead</a></li>
                                        <li><a href="form-wizard.html">Form Wizard</a></li>
                                        <li><a href="form-xeditable.html">Xeditable Editor</a></li>
                                        <li><a href="form-summernote.html">Summernote Editor</a></li>
                                        <li><a href="form-tinymce.html">Tinymce Editor</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a className="has-arrow " href="#" aria-expanded="false"><i className="mdi mdi-table"></i><span className="hide-menu">Tables</span></a>
                                    <ul aria-expanded="false" className="collapse">
                                        <li><a href="table-basic.html">Basic Tables</a></li>
                                        <li><a href="table-layout.html">Table Layouts</a></li>
                                        <li><a href="table-data-table.html">Data Tables</a></li>
                                        <li><a href="table-footable.html">Footable</a></li>
                                        <li><a href="table-jsgrid.html">Js Grid Table</a></li>
                                        <li><a href="table-responsive.html">Responsive Table</a></li>
                                        <li><a href="table-bootstrap.html">Bootstrap Tables</a></li>
                                        <li><a href="table-editable-table.html">Editable Table</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a className="has-arrow " href="#" aria-expanded="false"><i className="mdi mdi-widgets"></i><span className="hide-menu">Widgets</span></a>
                                    <ul aria-expanded="false" className="collapse">
                                        <li><a href="widget-apps.html">Widget Apps</a></li>
                                        <li><a href="widget-data.html">Widget Data</a></li>
                                        <li><a href="widget-charts.html">Widget Charts</a></li>
                                    </ul>
                                </li>
                                <li className="nav-devider"></li>
                                <li className="nav-small-cap">EXTRA COMPONENTS</li>
                                <li>
                                    <a className="has-arrow " href="#" aria-expanded="false"><i className="mdi mdi-book-multiple"></i><span className="hide-menu">Page Layout</span></a>
                                    <ul aria-expanded="false" className="collapse">
                                        <li><a href="layout-single-column.html">1 Column</a></li>
                                        <li><a href="layout-fix-header.html">Fix header</a></li>
                                        <li><a href="layout-fix-sidebar.html">Fix sidebar</a></li>
                                        <li><a href="layout-fix-header-sidebar.html">Fixe header &amp; Sidebar</a></li>
                                        <li><a href="layout-boxed.html">Boxed Layout</a></li>
                                        <li><a href="layout-logo-center.html">Logo in Center</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a className="has-arrow " href="#" aria-expanded="false"><i className="mdi mdi-book-open-variant"></i><span className="hide-menu">Sample Pages</span></a>
                                    <ul aria-expanded="false" className="collapse">
                                        <li><a href="starter-kit.html">Starter Kit</a></li>
                                        <li><a href="pages-blank.html">Blank page</a></li>
                                        <li><a href="#" className="has-arrow">Authentication <span className="label label-rounded label-success">6</span></a>
                                            <ul aria-expanded="false" className="collapse">
                                                <li><a href="pages-login.html">Login 1</a></li>
                                                <li><a href="pages-login-2.html">Login 2</a></li>
                                                <li><a href="pages-register.html">Register</a></li>
                                                <li><a href="pages-register2.html">Register 2</a></li>
                                                <li><a href="pages-lockscreen.html">Lockscreen</a></li>
                                                <li><a href="pages-recover-password.html">Recover password</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="pages-profile.html">Profile page</a></li>
                                        <li><a href="pages-animation.html">Animation</a></li>
                                        <li><a href="pages-fix-innersidebar.html">Sticky Left sidebar</a></li>
                                        <li><a href="pages-fix-inner-right-sidebar.html">Sticky Right sidebar</a></li>
                                        <li><a href="pages-invoice.html">Invoice</a></li>
                                        <li><a href="pages-treeview.html">Treeview</a></li>
                                        <li><a href="pages-utility-classNamees.html">Helper classNamees</a></li>
                                        <li><a href="pages-search-result.html">Search result</a></li>
                                        <li><a href="pages-scroll.html">Scrollbar</a></li>
                                        <li><a href="pages-pricing.html">Pricing</a></li>
                                        <li><a href="pages-lightbox-popup.html">Lighbox popup</a></li>
                                        <li><a href="pages-gallery.html">Gallery</a></li>
                                        <li><a href="pages-faq.html">Faqs</a></li>
                                        <li><a href="#" className="has-arrow">Error Pages</a>
                                            <ul aria-expanded="false" className="collapse">
                                                <li><a href="pages-error-400.html">400</a></li>
                                                <li><a href="pages-error-403.html">403</a></li>
                                                <li><a href="pages-error-404.html">404</a></li>
                                                <li><a href="pages-error-500.html">500</a></li>
                                                <li><a href="pages-error-503.html">503</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a className="has-arrow " href="#" aria-expanded="false"><i className="mdi mdi-file-chart"></i><span className="hide-menu">Charts</span></a>
                                    <ul aria-expanded="false" className="collapse">
                                        <li><a href="chart-morris.html">Morris Chart</a></li>
                                        <li><a href="chart-chartist.html">Chartis Chart</a></li>
                                        <li><a href="chart-echart.html">Echarts</a></li>
                                        <li><a href="chart-flot.html">Flot Chart</a></li>
                                        <li><a href="chart-knob.html">Knob Chart</a></li>
                                        <li><a href="chart-chart-js.html">Chartjs</a></li>
                                        <li><a href="chart-sparkline.html">Sparkline Chart</a></li>
                                        <li><a href="chart-extra-chart.html">Extra chart</a></li>
                                        <li><a href="chart-peity.html">Peity Charts</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a className="has-arrow " href="#" aria-expanded="false"><i className="mdi mdi-brush"></i><span className="hide-menu">Icons</span></a>
                                    <ul aria-expanded="false" className="collapse">
                                        <li><a href="icon-material.html">Material Icons</a></li>
                                        <li><a href="icon-fontawesome.html">Fontawesome Icons</a></li>
                                        <li><a href="icon-themify.html">Themify Icons</a></li>
                                        <li><a href="icon-linea.html">Linea Icons</a></li>
                                        <li><a href="icon-weather.html">Weather Icons</a></li>
                                        <li><a href="icon-simple-lineicon.html">Simple Lineicons</a></li>
                                        <li><a href="icon-flag.html">Flag Icons</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a className="has-arrow " href="#" aria-expanded="false"><i className="mdi mdi-map-marker"></i><span className="hide-menu">Maps</span></a>
                                    <ul aria-expanded="false" className="collapse">
                                        <li><a href="map-google.html">Google Maps</a></li>
                                        <li><a href="map-vector.html">Vector Maps</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a className="has-arrow " href="#" aria-expanded="false"><i className="mdi mdi-arrange-send-backward"></i><span className="hide-menu">Multi level dd</span></a>
                                    <ul aria-expanded="false" className="collapse">
                                        <li><a href="#">item 1.1</a></li>
                                        <li><a href="#">item 1.2</a></li>
                                        <li>
                                            <a className="has-arrow" href="#" aria-expanded="false">Menu 1.3</a>
                                            <ul aria-expanded="false" className="collapse">
                                                <li><a href="#">item 1.3.1</a></li>
                                                <li><a href="#">item 1.3.2</a></li>
                                                <li><a href="#">item 1.3.3</a></li>
                                                <li><a href="#">item 1.3.4</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">item 1.4</a></li>
                                    </ul>
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
                            <div className="col-md-6 col-4 align-self-center">
                                <button className="right-side-toggle waves-effect waves-light btn-info btn-circle btn-sm pull-right m-l-10"><i className="ti-settings text-white"></i></button>
                                <button className="btn pull-right hidden-sm-down btn-success"><i className="mdi mdi-plus-circle"></i> Create</button>
                                <div className="dropdown pull-right m-r-10 hidden-sm-down">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        January 2017
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="#">February 2017</a>
                                        <a className="dropdown-item" href="#">March 2017</a>
                                        <a className="dropdown-item" href="#">April 2017</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Daily Sales</h4>
                                        <div className="text-right">
                                            <h2 className="font-light m-b-0"><i className="ti-arrow-up text-success"></i> $120</h2>
                                            <span className="text-muted">Todays Income</span>
                                        </div>
                                        <span className="text-success">80%</span>
                                        <div className="progress">
                                            <div className="progress-bar bg-success" role="progressbar" style={{width: "80%", height: "6px"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Weekly Sales</h4>
                                        <div className="text-right">
                                            <h2 className="font-light m-b-0"><i className="ti-arrow-up text-info"></i> $5,000</h2>
                                            <span className="text-muted">Todays Income</span>
                                        </div>
                                        <span className="text-info">30%</span>
                                        <div className="progress">
                                            <div className="progress-bar bg-info" role="progressbar" style={{width: "30%", height: "6px"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Monthly Sales</h4>
                                        <div className="text-right">
                                            <h2 className="font-light m-b-0"><i className="ti-arrow-up text-purple"></i> $8,000</h2>
                                            <span className="text-muted">Todays Income</span>
                                        </div>
                                        <span className="text-purple">60%</span>
                                        <div className="progress">
                                            <div className="progress-bar bg-purple" role="progressbar" style={{width: "60%", height: "6px"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Yearly Sales</h4>
                                        <div className="text-right">
                                            <h2 className="font-light m-b-0"><i className="ti-arrow-down text-danger"></i> $12,000</h2>
                                            <span className="text-muted">Todays Income</span>
                                        </div>
                                        <span className="text-danger">80%</span>
                                        <div className="progress">
                                            <div className="progress-bar bg-danger" role="progressbar" style={{width: "80%", height: "6px"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="d-flex flex-wrap">
                                                    <div>
                                                        <h3>Revenue Statistics</h3>
                                                        <h6 className="card-subtitle">January 2017</h6> </div>
                                                    <div className="ml-auto ">
                                                        <ul className="list-inline">
                                                            <li>
                                                                <h6 className="text-muted"><i className="fa fa-circle m-r-5 text-success"></i>Product A</h6> </li>
                                                            <li>
                                                                <h6 className="text-muted"><i className="fa fa-circle m-r-5 text-info"></i>Product B</h6> </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="total-revenue4" style={{height: "350px"}}></div>
                                            </div>
                                            <div className="col-lg-3 col-md-6 m-b-30 m-t-20 text-center">
                                                <h1 className="m-b-0 font-light">$54578</h1>
                                                <h6 className="text-muted">Total Revenue</h6></div>
                                            <div className="col-lg-3 col-md-6 m-b-30 m-t-20 text-center">
                                                <h1 className="m-b-0 font-light">$43451</h1>
                                                <h6 className="text-muted">Online Revenue</h6></div>
                                            <div className="col-lg-3 col-md-6 m-b-30 m-t-20 text-center">
                                                <h1 className="m-b-0 font-light">$44578</h1>
                                                <h6 className="text-muted">Product A</h6></div>
                                            <div className="col-lg-3 col-md-6 m-b-30 m-t-20 text-center">
                                                <h1 className="m-b-0 font-light">$12578</h1>
                                                <h6 className="text-muted">Product B</h6></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Sales of the Month</h4>
                                        <div id="sales-donute" style={{width:"100%", height:"300px"}}></div>
                                        <div className="round-overlap m-t-20"><i className="mdi mdi-cart"></i></div>
                                        <ul className="list-inline m-t-30 text-center">
                                            <li><i className="fa fa-circle text-purple"></i> Item A</li>
                                            <li><i className="fa fa-circle text-success"></i> Item B</li>
                                            <li><i className="fa fa-circle text-info"></i> Item C</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="card">
                                            <div className="card-body">
                                                <h4 className="card-title">Sales Prediction</h4>
                                                <div className="d-flex flex-row">
                                                    <div className="align-self-center">
                                                        <span className="display-6">$3528</span>
                                                        <h6 className="text-muted">(150-165 Sales)</h6>
                                                    </div>
                                                    <div className="ml-auto">
                                                        <div id="gauge-chart" style={{width:"150px", height:"150px"}}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="card">
                                            <div className="card-body">
                                                <h4 className="card-title">Sales Difference</h4>
                                                <div className="d-flex flex-row">
                                                    <div className="align-self-center">
                                                        <span className="display-6">$4316</span>
                                                        <h6 className="text-muted">(150-165 Sales)</h6>
                                                    </div>
                                                    <div className="ml-auto">
                                                        <div className="ct-chart" style={{width:"120px", height: "120px"}}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex flex-row">
                                            <div className=""><img src="../../../static/admin/assets/images/users/1.jpg" alt="user" className="img-circle" width="100" /></div>
                                            <div className="p-l-20">
                                                <h3 className="font-medium">Daniel Kristeen</h3>
                                                <h6>UIUX Designer</h6>
                                                <button className="btn btn-success"><i className="ti-plus"></i> Follow</button>
                                            </div>
                                        </div>
                                        <div className="row m-t-40">
                                            <div className="col b-r">
                                                <h2 className="font-light">14</h2>
                                                <h6>Photos</h6></div>
                                            <div className="col b-r">
                                                <h2 className="font-light">54</h2>
                                                <h6>Videos</h6></div>
                                            <div className="col">
                                                <h2 className="font-light">145</h2>
                                                <h6>Tasks</h6></div>
                                        </div>
                                    </div>
                                    <div>
                                        <hr></hr>
                                    </div>
                                    <div className="card-body">
                                        <p className="text-center aboutscroll">
                                            Lorem ipsum dolor sit ametetur adipisicing elit, sed do eiusmod tempor incididunt adipisicing elit, sed do eiusmod tempor incididunLorem ipsum dolor sit ametetur adipisicing elit, sed do eiusmod tempor incididuntt
                                        </p>
                                        <ul className="list-icons d-flex flex-item text-center p-t-10">
                                            <li className="col"><a href="javascript:void(0)" data-toggle="tooltip" title="" data-original-title="Website"><i className="fa fa-globe font-20"></i></a></li>
                                            <li className="col"><a href="javascript:void(0)" data-toggle="tooltip" title="" data-original-title="twitter"><i className="fa fa-twitter font-20"></i></a></li>
                                            <li className="col"><a href="javascript:void(0)" data-toggle="tooltip" title="" data-original-title="Facebook"><i className="fa fa-facebook-square font-20"></i></a></li>
                                            <li className="col"><a href="javascript:void(0)" data-toggle="tooltip" title="" data-original-title="Youtube"><i className="fa fa-youtube-play font-20"></i></a></li>
                                            <li className="col"><a href="javascript:void(0)" data-toggle="tooltip" title="" data-original-title="Linkd-in"><i className="fa fa-linkedin-square font-20"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Recent Chats</h4>
                                        <div className="chat-box">
                                            <ul className="chat-list">
                                                <li>
                                                    <div className="chat-img"><img src="../../../static/admin/assets/images/users/1.jpg" alt="user" /></div>
                                                    <div className="chat-content">
                                                        <h5>James Anderson</h5>
                                                        <div className="box bg-light-info">Lorem Ipsum is simply dummy text of the printing & type setting industry.</div>
                                                    </div>
                                                    <div className="chat-time">10:56 am</div>
                                                </li>
                                                <li>
                                                    <div className="chat-img"><img src="../../../static/admin/assets/images/users/2.jpg" alt="user" /></div>
                                                    <div className="chat-content">
                                                        <h5>Bianca Doe</h5>
                                                        <div className="box bg-light-success">It’s Great opportunity to work.</div>
                                                    </div>
                                                    <div className="chat-time">10:57 am</div>
                                                </li>
                                                <li className="odd">
                                                    <div className="chat-content">
                                                        <div className="box bg-light-inverse">I would love to join the team.</div>
                                                        <br />
                                                    </div>
                                                    <div className="chat-time">10:58 am</div>
                                                </li>
                                                <li className="odd">
                                                    <div className="chat-content">
                                                        <div className="box bg-light-inverse">Whats budget of the new project.</div>
                                                        <br />
                                                    </div>
                                                    <div className="chat-time">10:59 am</div>
                                                </li>
                                                <li>
                                                    <div className="chat-img"><img src="../../../static/admin/assets/images/users/3.jpg" alt="user" /></div>
                                                    <div className="chat-content">
                                                        <h5>Angelina Rhodes</h5>
                                                        <div className="box bg-light-primary">Well we have good budget for the project</div>
                                                    </div>
                                                    <div className="chat-time">11:00 am</div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-body b-t">
                                        <div className="row">
                                            <div className="col-8">
                                                <textarea placeholder="Type your message here" className="form-control b-0"></textarea>
                                            </div>
                                            <div className="col-4 text-right">
                                                <button type="button" className="btn btn-info btn-circle btn-lg"><i className="fa fa-paper-plane-o"></i> </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Recent Messages</h4>
                                        <div className="message-box">
                                            <div className="message-widget message-scroll">
                                                <a href="#">
                                                    <div className="user-img"> <img src="../../../static/admin/assets/images/users/1.jpg" alt="user" className="img-circle" /> <span className="profile-status online pull-right"></span> </div>
                                                    <div className="mail-contnet">
                                                        <h5>Pavan kumar</h5> <span className="mail-desc">Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been.</span> <span className="time">9:30 AM</span> </div>
                                                </a>
                                                <a href="#">
                                                    <div className="user-img"> <img src="../../../static/admin/assets/images/users/2.jpg" alt="user" className="img-circle" /> <span className="profile-status busy pull-right"></span> </div>
                                                    <div className="mail-contnet">
                                                        <h5>Sonu Nigam</h5> <span className="mail-desc">I've sung a song! See you at</span> <span className="time">9:10 AM</span> </div>
                                                </a>
                                                <a href="#">
                                                    <div className="user-img"> <span className="round">A</span> <span className="profile-status away pull-right"></span> </div>
                                                    <div className="mail-contnet">
                                                        <h5>Arijit Sinh</h5> <span className="mail-desc">Simply dummy text of the printing and typesetting industry.</span> <span className="time">9:08 AM</span> </div>
                                                </a>
                                                <a href="#">
                                                    <div className="user-img"> <img src="../../../static/admin/assets/images/users/4.jpg" alt="user" className="img-circle" /> <span className="profile-status offline pull-right"></span> </div>
                                                    <div className="mail-contnet">
                                                        <h5>Pavan kumar</h5> <span className="mail-desc">Just see the my admin!</span> <span className="time">9:02 AM</span> </div>
                                                </a>
                                                <a href="#">
                                                    <div className="user-img"> <img src="../../../static/admin/assets/images/users/1.jpg" alt="user" className="img-circle" /><span className="profile-status online pull-right"></span> </div>
                                                    <div className="mail-contnet">
                                                        <h5>Pavan kumar</h5> <span className="mail-desc">Welcome to the Elite Admin</span> <span className="time">9:30 AM</span> </div>
                                                </a>
                                                <a href="#">
                                                    <div className="user-img"> <img src="../../../static/admin/assets/images/users/2.jpg" alt="user" className="img-circle" /> <span className="profile-status busy pull-right"></span> </div>
                                                    <div className="mail-contnet">
                                                        <h5>Sonu Nigam</h5> <span className="mail-desc">I've sung a song! See you at</span> <span className="time">9:10 AM</span> </div>
                                                </a>
                                                <a href="#">
                                                    <div className="user-img"> <img src="../../../static/admin/assets/images/users/3.jpg" alt="user" className="img-circle" /><span className="profile-status away pull-right"></span> </div>
                                                    <div className="mail-contnet">
                                                        <h5>Arijit Sinh</h5> <span className="mail-desc">I am a singer!</span> <span className="time">9:08 AM</span> </div>
                                                </a>
                                                <a href="#">
                                                    <div className="user-img"> <img src="../../../static/admin/assets/images/users/4.jpg" alt="user" className="img-circle" /> <span className="profile-status offline pull-right"></span> </div>
                                                    <div className="mail-contnet">
                                                        <h5>Pavan kumar</h5> <span className="mail-desc">Just see the my admin!</span> <span className="time">9:02 AM</span> </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="card">
                                    <div className="card-body">
                                        <select className="custom-select pull-right">
                                            <option selected>January</option>
                                            <option value="1">February</option>
                                            <option value="2">March</option>
                                            <option value="3">April</option>
                                        </select>
                                        <h4 className="card-title">Projects of the Month</h4>
                                        <div className="table-responsive m-t-40">
                                            <table className="table stylish-table">
                                                <thead>
                                                    <tr>
                                                        <th colspan="2">Assigned</th>
                                                        <th>Name</th>
                                                        <th>Priority</th>
                                                        <th>Budget</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td style={{width:"50px"}}><span className="round">S</span></td>
                                                        <td>
                                                            <h6>Sunil Joshi</h6><small className="text-muted">Web Designer</small></td>
                                                        <td>Elite Admin</td>
                                                        <td><span className="label label-light-success">Low</span></td>
                                                        <td>$3.9K</td>
                                                    </tr>
                                                    <tr className="active">
                                                        <td><span className="round"><img src="../../../static/admin/assets/images/users/2.jpg" alt="user" width="50" /></span></td>
                                                        <td>
                                                            <h6>Andrew</h6><small className="text-muted">Project Manager</small></td>
                                                        <td>Real Homes</td>
                                                        <td><span className="label label-light-info">Medium</span></td>
                                                        <td>$23.9K</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="round round-success">B</span></td>
                                                        <td>
                                                            <h6>Bhavesh patel</h6><small className="text-muted">Developer</small></td>
                                                        <td>MedicalPro Theme</td>
                                                        <td><span className="label label-light-danger">High</span></td>
                                                        <td>$12.9K</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="round round-primary">N</span></td>
                                                        <td>
                                                            <h6>Nirav Joshi</h6><small className="text-muted">Frontend Eng</small></td>
                                                        <td>Elite Admin</td>
                                                        <td><span className="label label-light-success">Low</span></td>
                                                        <td>$10.9K</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="round round-warning">M</span></td>
                                                        <td>
                                                            <h6>Micheal Doe</h6><small className="text-muted">Content Writer</small></td>
                                                        <td>Helping Hands</td>
                                                        <td><span className="label label-light-danger">High</span></td>
                                                        <td>$12.9K</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="round round-danger">N</span></td>
                                                        <td>
                                                            <h6>Johnathan</h6><small className="text-muted">Graphic</small></td>
                                                        <td>Digital Agency</td>
                                                        <td><span className="label label-light-danger">High</span></td>
                                                        <td>$2.6K</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card">
                                    <div className="card-body">
                                        <select className="custom-select pull-right">
                                            <option selected>Today</option>
                                            <option value="1">Weekly</option>
                                        </select>
                                        <h4 className="card-title">Weather Report</h4>
                                        <div className="d-flex align-items-center flex-row m-t-30">
                                            <div className="p-2 display-5 text-info"><i className="wi wi-day-showers"></i> <span>73<sup>°</sup></span></div>
                                            <div className="p-2">
                                                <h3 className="m-b-0">Saturday</h3><small>Ahmedabad, India</small></div>
                                        </div>
                                        <table className="table no-border">
                                            <tr>
                                                <td>Wind</td>
                                                <td className="font-medium">ESE 17 mph</td>
                                            </tr>
                                            <tr>
                                                <td>Humidity</td>
                                                <td className="font-medium">83%</td>
                                            </tr>
                                            <tr>
                                                <td>Pressure</td>
                                                <td className="font-medium">28.56 in</td>
                                            </tr>
                                            <tr>
                                                <td>Cloud Cover</td>
                                                <td className="font-medium">78%</td>
                                            </tr>
                                            <tr>
                                                <td>Ceiling</td>
                                                <td className="font-medium">25760 ft</td>
                                            </tr>
                                        </table>
                                        <hr />
                                        <ul className="list-unstyled row text-center city-weather-days">
                                            <li className="col"><i className="wi wi-day-sunny"></i><span>09:30</span>
                                                <h3>70<sup>°</sup></h3></li>
                                            <li className="col"><i className="wi wi-day-cloudy"></i><span>11:30</span>
                                                <h3>72<sup>°</sup></h3></li>
                                            <li className="col"><i className="wi wi-day-hail"></i><span>13:30</span>
                                                <h3>75<sup>°</sup></h3></li>
                                            <li className="col"><i className="wi wi-day-sprinkle"></i><span>15:30</span>
                                                <h3>76<sup>°</sup></h3></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="card">
                                    <img className="card-img-top img-responsive" src="../../../static/admin/assets/images/big/img1.jpg" alt="Card" />
                                    <div className="card-body">
                                        <ul className="list-inline font-14">
                                            <li className="p-l-0">20 May 2016</li>
                                            <li><a href="javascript:void(0)" className="link">3 Comment</a></li>
                                        </ul>
                                        <h3 className="font-normal">Featured Hydroflora Pots Garden &amp; Outdoors</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card">
                                    <img className="card-img-top img-responsive" src="../../../static/admin/assets/images/big/img2.jpg" alt="Card" />
                                    <div className="card-body">
                                        <ul className="list-inline font-14">
                                            <li className="p-l-0">20 May 2016</li>
                                            <li><a href="javascript:void(0)" className="link">3 Comment</a></li>
                                        </ul>
                                        <h3 className="font-normal">Featured Hydroflora Pots Garden &amp; Outdoors</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card">
                                    <img className="card-img-top img-responsive" src="../../../static/admin/assets/images/big/img4.jpg" alt="Card" />
                                    <div className="card-body">
                                        <ul className="list-inline font-14">
                                            <li className="p-l-0">20 May 2016</li>
                                            <li><a href="javascript:void(0)" className="link">3 Comment</a></li>
                                        </ul>
                                        <h3 className="font-normal">Featured Hydroflora Pots Garden &amp; Outdoors</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Recent Comments</h4>
                                    </div>
                                    <div className="comment-widgets">
                                        <div className="d-flex flex-row comment-row">
                                            <div className="p-2"><span className="round"><img src="../../../static/admin/assets/images/users/1.jpg" alt="user" width="50" /></span></div>
                                            <div className="comment-text w-100">
                                                <h5>James Anderson</h5>
                                                <p className="m-b-5">Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has beenorem Ipsum is simply dummy text of the printing and type setting industry.</p>
                                                <div className="comment-footer">
                                                    <span className="text-muted pull-right">April 14, 2016</span>
                                                    <span className="label label-light-info">Pending</span>
                                                    <span className="action-icons">
                                                        <a href="javascript:void(0)"><i className="ti-pencil-alt"></i></a>
                                                        <a href="javascript:void(0)"><i className="ti-check"></i></a>
                                                        <a href="javascript:void(0)"><i className="ti-heart"></i></a>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row comment-row active">
                                            <div className="p-2"><span className="round"><img src="../../../static/admin/assets/images/users/2.jpg" alt="user" width="50" /></span></div>
                                            <div className="comment-text active w-100">
                                                <h5>Michael Jorden</h5>
                                                <p className="m-b-5">Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has beenorem Ipsum is simply dummy text of the printing and type setting industry..</p>
                                                <div className="comment-footer ">
                                                    <span className="text-muted pull-right">April 14, 2016</span>
                                                    <span className="label label-light-success">Approved</span>
                                                    <span className="action-icons active">
                                                        <a href="javascript:void(0)"><i className="ti-pencil-alt"></i></a>
                                                        <a href="javascript:void(0)"><i className="icon-close"></i></a>
                                                        <a href="javascript:void(0)"><i className="ti-heart text-danger"></i></a>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row comment-row">
                                            <div className="p-2"><span className="round"><img src="../../../static/admin/assets/images/users/3.jpg" alt="user" width="50" /></span></div>
                                            <div className="comment-text w-100">
                                                <h5>Johnathan Doeting</h5>
                                                <p className="m-b-5">Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has beenorem Ipsum is simply dummy text of the printing and type setting industry.</p>
                                                <div className="comment-footer">
                                                    <span className="text-muted pull-right">April 14, 2016</span>
                                                    <span className="label label-light-danger">Rejected</span>
                                                    <span className="action-icons">
                                                        <a href="javascript:void(0)"><i className="ti-pencil-alt"></i></a>
                                                        <a href="javascript:void(0)"><i className="ti-check"></i></a>
                                                        <a href="javascript:void(0)"><i className="ti-heart"></i></a>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row comment-row">
                                            <div className="p-2"><span className="round"><img src="../../../static/admin/assets/images/users/4.jpg" alt="user" width="50" /></span></div>
                                            <div className="comment-text w-100">
                                                <h5>James Anderson</h5>
                                                <p className="m-b-5">Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has beenorem Ipsum is simply dummy text of the printing and type setting industry..</p>
                                                <div className="comment-footer">
                                                    <span className="text-muted pull-right">April 14, 2016</span>
                                                    <span className="label label-light-info">Pending</span>
                                                    <span className="action-icons">
                                                        <a href="javascript:void(0)"><i className="ti-pencil-alt"></i></a>
                                                        <a href="javascript:void(0)"><i className="ti-check"></i></a>
                                                        <a href="javascript:void(0)"><i className="ti-heart"></i></a>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-body">
                                        <button className="pull-right btn btn-sm btn-rounded btn-success" data-toggle="modal" data-target="#myModal">Add Task</button>
                                        <h4 className="card-title">To Do list</h4>
                                        <div className="to-do-widget m-t-20">
                                            <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-hidden="true">
                                                <div className="modal-dialog" role="document">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h4 className="modal-title">Add Task</h4>
                                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <form>
                                                                <div className="form-group">
                                                                    <label>Name</label>
                                                                    <input type="text" className="form-control" placeholder="Enter Your Name" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label>Email address</label>
                                                                    <input type="email" className="form-control" placeholder="Enter email" />
                                                                </div>
                                                            </form>
                                                        </div>
                                                        <div className="modal-footer">
                                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                            <button type="button" className="btn btn-success" data-dismiss="modal">Submit</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul className="list-task todo-list list-group m-b-0" data-role="tasklist">
                                                <li className="list-group-item" data-role="task">
                                                    <div className="checkbox checkbox-info">
                                                        <input type="checkbox" id="inputSchedule" name="inputCheckboxesSchedule" />
                                                        <label for="inputSchedule" className=""> <span>Schedule meeting with</span> </label>
                                                    </div>
                                                    <ul className="assignedto">
                                                        <li><img src="../../../static/admin/assets/images/users/1.jpg" alt="user" data-toggle="tooltip" data-placement="top" title="" data-original-title="Steave" /></li>
                                                        <li><img src="../../../static/admin/assets/images/users/2.jpg" alt="user" data-toggle="tooltip" data-placement="top" title="" data-original-title="Jessica" /></li>
                                                        <li><img src="../../../static/admin/assets/images/users/3.jpg" alt="user" data-toggle="tooltip" data-placement="top" title="" data-original-title="Priyanka" /></li>
                                                        <li><img src="../../../static/admin/assets/images/users/4.jpg" alt="user" data-toggle="tooltip" data-placement="top" title="" data-original-title="Selina" /></li>
                                                    </ul>
                                                </li>
                                                <li className="list-group-item" data-role="task">
                                                    <div className="checkbox checkbox-info">
                                                        <input type="checkbox" id="inputCall" name="inputCheckboxesCall" />
                                                        <label for="inputCall" className=""> <span>Give Purchase report to</span> <span className="label label-light-danger">Today</span> </label>
                                                    </div>
                                                    <ul className="assignedto">
                                                        <li><img src="../../../static/admin/assets/images/users/3.jpg" alt="user" data-toggle="tooltip" data-placement="top" title="" data-original-title="Priyanka" /></li>
                                                        <li><img src="../../../static/admin/assets/images/users/4.jpg" alt="user" data-toggle="tooltip" data-placement="top" title="" data-original-title="Selina" /></li>
                                                    </ul>
                                                </li>
                                                <li className="list-group-item" data-role="task">
                                                    <div className="checkbox checkbox-info">
                                                        <input type="checkbox" id="inputBook" name="inputCheckboxesBook" />
                                                        <label for="inputBook" className=""> <span>Book flight for holiday</span> </label>
                                                    </div>
                                                    <div className="item-date"> 26 jun 2017</div>
                                                </li>
                                                <li className="list-group-item" data-role="task">
                                                    <div className="checkbox checkbox-info">
                                                        <input type="checkbox" id="inputForward" name="inputCheckboxesForward" />
                                                        <label for="inputForward" className=""> <span>Forward all tasks</span> <span className="label label-light-warning">2 weeks</span> </label>
                                                    </div>
                                                    <div className="item-date"> 26 jun 2017</div>
                                                </li>
                                                <li className="list-group-item" data-role="task">
                                                    <div className="checkbox checkbox-info">
                                                        <input type="checkbox" id="inputRecieve" name="inputCheckboxesRecieve" />
                                                        <label for="inputRecieve" className=""> <span>Recieve shipment</span> </label>
                                                    </div>
                                                    <div className="item-date"> 26 jun 2017</div>
                                                </li>
                                                <li className="list-group-item" data-role="task">
                                                    <div className="checkbox checkbox-info">
                                                        <input type="checkbox" id="inputpayment" name="inputCheckboxespayment" />
                                                        <label for="inputpayment" className=""> <span>Send payment today</span> </label>
                                                    </div>
                                                    <div className="item-date"> 26 jun 2017</div>
                                                </li>
                                                <li className="list-group-item" data-role="task">
                                                    <div className="checkbox checkbox-info">
                                                        <input type="checkbox" id="inputForward2" name="inputCheckboxesd" />
                                                        <label for="inputForward2" className=""> <span>Important tasks</span> <span className="label label-light-success">2 weeks</span> </label>
                                                    </div>
                                                    <ul className="assignedto">
                                                        <li><img src="../../../static/admin/assets/images/users/1.jpg" alt="user" data-toggle="tooltip" data-placement="top" title="" data-original-title="Assign to Steave" /></li>
                                                        <li><img src="../../../static/admin/assets/images/users/2.jpg" alt="user" data-toggle="tooltip" data-placement="top" title="" data-original-title="Assign to Jessica" /></li>
                                                        <li><img src="../../../static/admin/assets/images/users/4.jpg" alt="user" data-toggle="tooltip" data-placement="top" title="" data-original-title="Assign to Selina" /></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right-sidebar">
                            <div className="slimscrollright">
                                <div className="rpanel-title"> Service Panel <span><i className="ti-close right-side-toggle"></i></span> </div>
                                <div className="r-panel-body">
                                    <ul id="themecolors" className="m-t-20">
                                        <li><b>With Light sidebar</b></li>
                                        <li><a href="javascript:void(0)" data-theme="default" className="default-theme">1</a></li>
                                        <li><a href="javascript:void(0)" data-theme="green" className="green-theme">2</a></li>
                                        <li><a href="javascript:void(0)" data-theme="red" className="red-theme">3</a></li>
                                        <li><a href="javascript:void(0)" data-theme="blue" className="blue-theme working">4</a></li>
                                        <li><a href="javascript:void(0)" data-theme="purple" className="purple-theme">5</a></li>
                                        <li><a href="javascript:void(0)" data-theme="megna" className="megna-theme">6</a></li>
                                        <li className="d-block m-t-30"><b>With Dark sidebar</b></li>
                                        <li><a href="javascript:void(0)" data-theme="default-dark" className="default-dark-theme">7</a></li>
                                        <li><a href="javascript:void(0)" data-theme="green-dark" className="green-dark-theme">8</a></li>
                                        <li><a href="javascript:void(0)" data-theme="red-dark" className="red-dark-theme">9</a></li>
                                        <li><a href="javascript:void(0)" data-theme="blue-dark" className="blue-dark-theme">10</a></li>
                                        <li><a href="javascript:void(0)" data-theme="purple-dark" className="purple-dark-theme">11</a></li>
                                        <li><a href="javascript:void(0)" data-theme="megna-dark" className="megna-dark-theme ">12</a></li>
                                    </ul>
                                    <ul className="m-t-20 chatonline">
                                        <li><b>Chat option</b></li>
                                        <li>
                                            <a href="javascript:void(0)"><img src="../../../static/admin/assets/images/users/1.jpg" alt="user-img" className="img-circle" /> <span>Varun Dhavan <small className="text-success">online</small></span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)"><img src="../../../static/admin/assets/images/users/2.jpg" alt="user-img" className="img-circle" /> <span>Genelia Deshmukh <small className="text-warning">Away</small></span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)"><img src="../../../static/admin/assets/images/users/3.jpg" alt="user-img" className="img-circle" /> <span>Ritesh Deshmukh <small className="text-danger">Busy</small></span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)"><img src="../../../static/admin/assets/images/users/4.jpg" alt="user-img" className="img-circle" /> <span>Arijit Sinh <small className="text-muted">Offline</small></span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)"><img src="../../../static/admin/assets/images/users/5.jpg" alt="user-img" className="img-circle" /> <span>Govinda Star <small className="text-success">online</small></span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)"><img src="../../../static/admin/assets/images/users/6.jpg" alt="user-img" className="img-circle" /> <span>John Abraham<small className="text-success">online</small></span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)"><img src="../../../static/admin/assets/images/users/7.jpg" alt="user-img" className="img-circle" /> <span>Hritik Roshan<small className="text-success">online</small></span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)"><img src="../../../static/admin/assets/images/users/8.jpg" alt="user-img" className="img-circle" /> <span>Pwandeep rajan <small className="text-success">online</small></span></a>
                                        </li>
                                    </ul>
                                </div>
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

