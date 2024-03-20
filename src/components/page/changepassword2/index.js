import Cards from "../../organism/card/card"
import Footer from "../../organism/footer"
import Navigation from "../../organism/navbar"
import logo from "../../../static/images/monster-admin-logo.png"
const ChangePassword2 = () =>{
    return(
        <div className="fix-header">
            <div id="main-wrapper">
                <header className="topheader">
                    <div className="fix-width">
                        <Navigation logo={logo} />
                    </div>
                </header>
                <div className="page-wrapper" >
                   <div className="container-fluid">
                    <div className="fix-width">
                        <div className="row justify-content-center banner-text">
                            <div className="col-md-5 m-b-10">
                                <Cards/>
                            </div>
                        </div>
                    </div>
                   </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default ChangePassword2