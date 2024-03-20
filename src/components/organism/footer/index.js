import { Container, Row, Col, Image } from 'react-bootstrap';
import screen1 from "../../../static/images/logo-light-icon.png"
import screen2 from "../../../static/images/logo-light-text.png"
const Footer = () => {

    return (
        <footer className="footer row">
            <Container className="fix-width">
                <Row>
                    <Col lg={3} md={6}>
                        <Image src={screen1} alt="logo" />
                        <Image src={screen2} alt="logo" />
                        <p className="m-t-30">
                            <span className="text-white">Monster Admin</span> is premium quality admin dashboard template with flat design. It is fully responsive admin dashboard template built with Bootstrap Framework, HTML5 & CSS3, Media query.
                        </p>
                    </Col>
                    <Col lg={3} md={6}>

                        <ul className="footer-link list-icons">
                            <li><a href="../minimal/index.html"><i className="ti-angle-right"></i> Modern Dashboard</a></li>
                            <li><a href="../minimal/index2.html"><i className="ti-angle-right"></i> Awesome Dashboad</a></li>
                            <li><a href="../minimal/index3.html"><i className="ti-angle-right"></i> Classy Dashboard</a></li>
                            <li><a href="../minimal/index4.html"><i className="ti-angle-right"></i> Analytical Dashboard</a></li>
                            <li><a href="../minimal/index5.html"><i className="ti-angle-right"></i> Minimal Dashboard</a></li>
                        </ul>
                    </Col>
                    <Col lg={3} md={6}>
                        <ul className="footer-link list-icons">
                            <li><a href="../minimal/widget-apps.html"><i className="ti-angle-right"></i> Widget Sections</a></li>
                            <li><a href="../minimal/chart-chartist.html"><i className="ti-angle-right"></i> Chart Options</a></li>
                            <li><a href="../minimal/form-layout.html"><i className="ti-angle-right"></i> Lots of Form Layouts</a></li>
                            <li><a href="../minimal/table-data-table.html"><i className="ti-angle-right"></i> Data Table Options</a></li>
                            <li><a href="../minimal/index.html"><i className="ti-angle-right"></i> Calendar Designs</a></li>
                        </ul>
                    </Col>
                    <Col lg={3} md={6}>
                        <ul className="footer-link list-icons">
                            <li><a href="../minimal/app-email.html"><i className="ti-angle-right"></i> Inbox Layout</a></li>
                            <li><a href="../minimal/pages-treeview.html"><i className="ti-angle-right"></i> Tree View Options</a></li>
                            <li><a href="../minimal/ui-carousel.html"><i className="ti-angle-right"></i> Carousel Slider Option</a></li>
                            <li><a href="../minimal/pages-gallery.html"><i className="ti-angle-right"></i> Gallery Option</a></li>
                            <li><a href="../minimal/starter-kit.html"><i className="ti-angle-right"></i> Starter Pages</a></li>
                        </ul>
                    </Col>
                    <div className="clearfix"></div>
                    <Col md={12} className="sub-footer">
                        <span>Copyright 2017. All Rights Reserved by <a className="text-white" href="https://wrappixel.com/templates/monsteradmin/" target="_blank">Monster Admin</a></span>
                        <span className="pull-right">Design & Developed by <a className="text-white" href="https://wrappixel.com" target="_blank">WrapPixel</a></span>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
export default Footer;