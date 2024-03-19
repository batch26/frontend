import "../../../static/bootstrap/css/bootstrap.min.css";
import "../../../static/css/style.css";
import "../../../static/css/colors/blue.css";

import RegisterForm from "../../organism/register";


let index = () => {
    const [input, setInput] = useState({});

    const handleChanges = (e) => {
        // const name = e.target.name
        // const value  = e.target.value

        const {name, value} = e.target

        setInput({...input,[name]: value})
    }

    return (
        <section id="wrapper" className="login-register login-sidebar" style={{ backgroundImage: `url("https://i.ibb.co/Ws42gtq/login-register.jpg")`}}>
            <div className="login-box card">
                <div className="card-body">
                    <RegisterForm handleChanges={handleChanges}/>
                </div>
            </div>
            <script src="../../../static/bootstrap/js/bootsrap.min.js"></script>
            <script src="../../../static/js/jquery.slimscroll.js"></script>
            <script src="../../../static/js/waves.js"></script>
            <script src="../../../static/js/sidebarmenu.js"></script>
            <script src="../../../static/js/sticky-kit.min.js"></script>
            <script src="../../../static/js/custom.min.js"></script>
            <script src="../../../static/js/jQuery.style.switcher.js"></script>
        </section>
    )
}

export default index;