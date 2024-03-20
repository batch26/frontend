import "../../../static/bootstrap/css/bootstrap.min.css";
import "../../../static/assets/owl.carousel/owl.carousel.min.css";
import "../../../static/assets/owl.carousel/owl.theme.default.css";
import "../../../static/css/style.css";
import logo from "../../../static/images/monster-admin-logo.png";
import hero from "../../../static/images/hero.jpg";
import colorskim from "../../../static/images/color-skim.png";
import sidebars from "../../../static/images/sidebars.png";
import pages from "../../../static/images/pages.png";
import uicomps from "../../../static/images/ui-component.png";
import widgets from "../../../static/images/widgets.png";
import bootstraps from "../../../static/images/bootstraps.png";
import fonts from "../../../static/images/fonts.png";
import respo from "../../../static/images/respo.png";
import less from "../../../static/images/less.png";
import customized from "../../../static/images/customized.png";
import charts from "../../../static/images/charts.png";
import multiupload from "../../../static/images/multi-upload.png";
import lightcolorskim from "../../../static/images/light-color-scheme.jpg";
import darkcolorskim from "../../../static/images/dark-color-scheme.jpg";
import tables from "../../../static/images/tables.png";
import forms from "../../../static/images/forms.png";
import ecom from "../../../static/images/e-com.png";
import multilevel from "../../../static/images/multi-level.png";
import calendar from "../../../static/images/calendar.png";
import gallery from "../../../static/images/gallery.png";
import docs from "../../../static/images/docs.png";
import dedicated from "../../../static/images/dedicated.png";
import ragular from "../../../static/images/ragular.png";
import logolighticon from "../../../static/images/logo-light-icon.png";
import logolighttext from "../../../static/images/logo-light-text.png";

import Navbar from "../../organism/navbar";
import Banner from "../../organism/banner";
import LabelFeat from "../../atom/feature";
import Feat1 from "../../atom/feature/feat1";
import Feat2 from "../../atom/feature/feat2";
import Feat3 from "../../atom/feature/feat3";
import DualBgLeft from "../../atom/dual-bg/dual-left";
import DualBgRight from "../../atom/dual-bg/dual-right";
import Feat4 from "../../atom/feature/feat4";
import Feat5 from "../../atom/feature/feat5";
import Feat6 from "../../atom/feature/feat6";
import Comment from "../../atom/comments";
import Offer from "../../atom/offer";
import Footer from "../../organism/footer";
import axios from 'axios';
import { useState, useEffect } from "react";

let labelfeat = [
    {
        label: "Amazing Features & Flexibility Provided"
    }
]

let feat1 = [
    {
        image: colorskim,
        label: "6 Color Schemes",
        plabel: "We have included 6 pre-defined color schemes with Monster Admin."
    },
    {
        image: sidebars,
        label: "Dark &amp; Light Sidebar",
        plabel: "Included Dark and Light Sidebar for getting desire look and feel."
    },
    {
        image: pages,
        label: "700+ Page Templates",
        plabel: "Yes, we have 6 demos &amp; 120+ Pages per demo to make it easier."
    },
    {
        image: uicomps,
        label: "500+ UI Components",
        plabel: "Almost 500+ UI Components being given with Monster Admin Pack."
    }
]
let feat2 = [
    {
        image: widgets,
        label: "Lots of Widgets",
        plabel: "Wide range of Widgets are available with Monster Admin Package."
    },
    {
        image: bootstraps,
        label: "Bootstrap 4x",
        plabel: "Its been made with Bootstrap 4 and full responsive layout."
    },
    {
        image: fonts,
        label: "3000+ Font Icons",
        plabel: "Lots of Icon Fonts are included here in the package of Monster Admin."
    },
    {
        image: respo,
        label: "Fully Responsive",
        plabel: "All the layout of Monster Admin is Fully Responsive and widely tested."
    }
]
let feat3 = [
    {
        image: less,
        label: "SaSSBase CSS",
        plabel: "Our Css is written Less Base to make your life easier."
    },
    {
        image: customized,
        label: "Easy to Customize",
        plabel: "Customization will be easy as we understand your pain."
    },
    {
        image: charts,
        label: "Lots of Chart Options",
        plabel: "You name it and we have it, Yes lots of variations for Charts."
    },
    {
        image: multiupload,
        label: "Mutiple File Uploads",
        plabel: "You can upload multiple files with our Multiple selector."
    }
]

let dualbgl = [
    {
        label1: "FOR MAIN DASHBOARD VERSION",
        label2: "Light Version of Monster Admin with",
        label3: "Light & Dark Sidebar Option",
        image: lightcolorskim
    }
]
let dualbg2 = [
    {
        label1: "FOR MAIN DASHBOARD VERSION",
        label2: "Light Version of Monster Admin with",
        label3: "Light & Dark Sidebar Option",
        image: darkcolorskim
    }
]

let feat4 = [
    {
        label1: "Lots of Table Examples",
        label2: "Data Tables are initial requirement ",
        label3: "and we added them.",
        image: tables
    },
    {
        label1: "Validation Forms",
        label2: "Different Forms with Validation are ",
        label3: "included in pack. ",
        image: forms
    },
    {
        label1: "eCommerce Pages",
        label2: "Yes, all related e-Commerce ",
        label3: "pages are included. ",
        image: ecom
    }
]
let feat5 = [
    {
        label1: "3 Level Dropdown Menu",
        label2: "We have added 3 Level Dropdown",
        label3: "Menu in Elite Pack. ",
        image: multilevel
    },
    {
        label1: "Calendar Design",
        label2: "Calendar is available with our package",
        label3: "&amp; in nice design. ",
        image: calendar
    },
    {
        label1: "Gallery Options",
        label2: "Covered options to showcase different",
        label3: "variation for gallery. ",
        image: gallery
    }
]
let feat6 = [
    {
        label1: "Detailed Documentation",
        label2: "We have made detailed documentation,",
        label3: "so it will easy to use. ",
        image: docs
    },
    {
        label1: "Dedicated Support",
        label2: "We believe in supreme support is",
        label3: "key and we offer that. ",
        image: dedicated
    },
    {
        label1: "Regular Updates",
        label2: "We are constantly updating our",
        label3: "pack with new features. ",
        image: ragular
    }
]

let coms = [
    {
        label1: "The free version is incredible and it had everything I needed, however I bought this full template to support the developer. It’s a great, lightweight template which has loads of awesome little features and pre-made layouts to help kick-start your next admin panel, CMS, or CRM system. Keep up the good work!",
        label2: "Nick Stanbridge"
    },
    {
        label1: "This front-end templates are very nice, very suitable for my background to do now, provide a lot of components for my use. Customer service is also very patient, very good, did not download the success of the beginning, and later also help me download finished, it is worth!",
        label2: "Shinwu Ch"
    },
    {
        label1: "in my opinion, Monster Admin is a professional light-weight theme that will suit multiple projects types including MVC web-projects & dashboard-type user interface. I am yet to take a deep dive into the many features it offers. But from a first-hand experience, I would say it is really worth the money you pay for it… Go ahead & give it a try",
        label2: "Mohammed Shameem"
    }
]

let footer = [
    {
        label1: "../minimal/index.html",
        label2: "../minimal/index2.html",
        label3: "../minimal/index3.html",
        label4: "../minimal/index4.html",
        label5: "../minimal/index5.html",
        label6: " Modern Dashboard",
        label7: " Awesome Dashboad",
        label8: "  classNamey Dashboad",
        label9: " Analytical Dashboard",
        label10: " Minimal Dashboard"
    },
    {
        label1: "../minimal/widget-apps.html",
        label2: "../minimal/chart-chartist.html",
        label3: "../minimal/form-layout.html",
        label4: "../minimal/table-data-table.html",
        label5: "../minimal/index.html",
        label6: " Widget Sections",
        label7: " Chart Options",
        label8: " Lots of Form Layouts",
        label9: " Data Table Options",
        label10: " Calendar Designs"
    },
    {
        label1: "../minimal/app-email.html",
        label2: "../minimal/pages-treeview.html",
        label3: "../minimal/ui-carousel.html",
        label4: "../minimal/pages-gallery.html",
        label5: "../minimal/starter-kit.html",
        label6: " Inbox Layout",
        label7: " Tree View Options",
        label8: " Carousel Slider Option",
        label9: " Analytical Dashboard",
        label10: " Starter Pages"
    }
]
let Index = () => {
    const [demo, setDemo] = useState([{}]);

    useEffect(() => {
        axios.post("https://worm-famous-mongoose.ngrok-free.app/api/account/authenticating", {
            email: "nasri.sarif1@batmandiri.com",
            password: "makanbang"
    }).then((response) => {
        console.log()
        setDemo(response.data.data);
    }).catch((error) => {
        console.log(error)
    });
    }, [])

    return (
        <div className="fix-header">
            <div id="main-wrapper">
                <header className="topheader">
                    <div className="fix-width">
                        <Navbar logo={logo} />
                    </div>
                </header>
                <div className="page-wrapper">
                    <div className="container-fluid">
                        <div className="fix-width">
                            <div className="row justify-content-center banner-text">
                                <Banner></Banner>
                                <div className="col-md-12">
                                    <div className="hero-banner m-t-30"> <img src={hero} className="img-responsive" alt="Monster admin template" /> </div>
                                </div>
                            </div>
                        </div>
                        <div className="row light-blue">
                            <div className="col-md-12" id="demos">
                                <div className="text-center"> <small className="text-info">The Most Complete Bootstrap Admin Template</small>
                                    <h2 className="display-7">Best Admin Template of 2017</h2>
                                    <p>Don’t go by our Words, checkout our awesome demos and verify yourself.
                                        <br />You will surely fall in love over the fresh design & brilliant code.</p>
                                </div>
                                <div className="fix-width">
                                    <div className="row text-center">
                                        {/* {demo.map(data => {
                                            console.log(data.image)
                                            return (
                                                <Demo image={data.image} label={data.label} />
                                            )
                                        })} */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row white-space">
                            <div className="col-md-12">
                                <div className="fix-width icon-section text-center"> <small className="text-info">ALMOST COVERED EVERYTHING</small>
                                    {labelfeat.map(data => {
                                        return (
                                            <LabelFeat label={data.label}></LabelFeat>
                                        )
                                    })}
                                    <div className="row m-t-40">
                                        {feat1.map(data => {
                                            return (
                                                <Feat1 image={data.image} label={data.label} plabel={data.plabel} ></Feat1>
                                            )
                                        })}
                                    </div>
                                    <div className="row m-t-40">
                                        {feat2.map(data => {
                                            return (
                                                <Feat2 image={data.image} label={data.label} plabel={data.plabel} ></Feat2>
                                            )
                                        })}
                                    </div>
                                    <div className="row m-t-40">
                                        {feat3.map(data => {
                                            return (
                                                <Feat3 image={data.image} label={data.label} plabel={data.plabel} ></Feat3>
                                            )
                                        })}
                                    </div>
                                    <a href="https://wrappixel.com/templates/monsteradmin/" className="btn btn-lg btn-success btn-rounded m-t-40"> Buy Monster Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="row dual-bg">
                            <div className="col-md-12">
                                <div className="fix-width">
                                    <div className="row">
                                        {dualbgl.map(data => {
                                            return (
                                                <DualBgLeft label1={data.label1} label2={data.label2} label3={data.label3} image={data.image} ></DualBgLeft>
                                            )
                                        })}
                                        {dualbg2.map(data => {
                                            return (
                                                <DualBgRight label1={data.label1} label2={data.label2} label3={data.label3} image={data.image} ></DualBgRight>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row white-space">
                            <div className="col-md-12">
                                <div className="fix-width icon-section text-center"> <small className="text-info">ALMOST COVERED EVERYTHING</small>
                                    <h2 className="display-7">We are proud on Features provided<br /> with Monster Template</h2>
                                    <div className="row m-t-40">
                                        {feat4.map(data => {
                                            return (
                                                <Feat4 image={data.image} label1={data.label1} label2={data.label2} label3={data.label3} ></Feat4>
                                            )
                                        })}
                                    </div>
                                    <div className="row m-t-40">
                                        {feat5.map(data => {
                                            return (
                                                <Feat5 image={data.image} label1={data.label1} label2={data.label2} label3={data.label3} ></Feat5>
                                            )
                                        })}
                                    </div>
                                    <div className="row m-t-40">
                                        {feat6.map(data => {
                                            return (
                                                <Feat6 image={data.image} label1={data.label1} label2={data.label2} label3={data.label3} ></Feat6>
                                            )
                                        })}
                                    </div>
                                    <a href="https://wrappixel.com/templates/monsteradmin/" className="btn btn-lg btn-success btn-rounded m-t-40"> Buy Monster Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="row light-blue">
                            <div className="col-md-12">
                                <div className="fix-width text-center"> <small className="text-info">ALMOST COVERED EVERYTHING</small>
                                    <h2 className="display-7">What Real Buyers have to <br />Say about Monster Admin</h2>
                                    {coms.map(data => {
                                        return (
                                            <Comment label1={data.label1} label2={data.label2} ></Comment>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 call-to-action bg-info">
                                <div className="fix-width">
                                    <Offer />
                                </div>
                            </div>
                        </div>

                        <Footer/>
                    </div>
                </div>
            </div>
            <script src="../../../static/js/jquery.min.js"></script>
            <script src="../../../static/bootstrap/js/tether.min.js"></script>
            <script src="../../../static/bootstrap/js/bootstrap.min.js"></script>
            <script src="../../../static/js/waves.js"></script>
            <script src="../../../static/js/sticky-kit.min.js"></script>
            <script src="../../../static/assets/owl.carousel/owl.carousel.min.js"></script>
            <script src="../../../static/js/custom.min.js"></script>
        </div>
    )
}

export default Index;