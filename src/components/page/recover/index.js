import "../../../static/bootstrap/css/bootstrap.min.css";
import "../../../static/css/colors/blue.css";
import "../../../static/css/style.css";
import Form from "../../organism/recover";

let backgroundStyle = {
    backgroundImage: 'url("https://i.ibb.co/Ws42gtq/login-register.jpg")'
};
let index = () => {
    
    return (
        <div>
            <section id="wrapper">
                <div className="login-register" style={backgroundStyle}>
                    <div className="login-box card">
                        <div className="card-body">
                            <Form/>
                        </div>
                    </div>
                </div>
            </section>


            <script src="../../../static/js/jquery.min.js"></script>
            <script src="../../../static/bootstrap/js/popper.min.js"></script>
            <script src="../../../static/bootstrap/js/bootstrap.min.js"></script>
            <script src="../../../static/js/jquery.slimscroll.js"></script>
            <script src="../../../static/js/waves.js"></script>
            <script src="../../../static/js/sidebarmenu.js"></script>
            <script src="../../../static/assets/plugins/sticky-kit-master/dist/sticky-kit.min.js"></script>
            <script src="../../../static/js/custom.min.js"></script>
            <script src="../../../static/assets/plugins/styleswitcher/jQuery.style.switcher.js"></script>
        </div>
    )
}

export default index;