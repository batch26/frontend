import RegisterInput from "../../molecule/register";

import logoic from "../../../static/images/logo-icon.png";
import logote from "../../../static/images/logo-text.png";

let index = () => {

    // console.log(props.handleChanges);

    // let input = [
    //     {
    //         label: "Name",
    //         type: "text",
    //         name: "name"
    //     },
    //     {
    //         label: "Email",
    //         type: "text",
    //         name: "email"
    //     },
    //     {
    //         label: "Password",
    //         type: "password",
    //         name: "password"
    //     }
    // ]

    return (
        <form className="form-horizontal form-material" id="loginform" action="index.html">
            <a href="#" className="text-center db"><img src={logoic} alt="Home" /><br /><img src={logote} alt="Home" /></a>
            <h3 className="box-title m-t-40 m-b-0">Register Now</h3><small>Create your account and enjoy</small>
            {input.map((data,index) => {
                return (
                    <RegisterInput key={index} label={data.label} type={data.type} name={data.name} />
                )
            })}
            <div className="form-group text-center m-t-20">
                <div className="col-xs-12">
                    <button className="btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light" type="submit">Sign Up</button>
                </div>
            </div>
            <div className="form-group m-b-0">
                <div className="col-sm-12 text-center">
                    <p>Already have an account? <a href="../../page/landing/index.js" className="text-info m-l-5"><b>Sign In</b></a></p>
                </div>
            </div>
        </form>
    )
}

export default index;