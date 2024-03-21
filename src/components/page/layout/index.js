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

