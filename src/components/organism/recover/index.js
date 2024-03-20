import { useState,useEffect } from "react";
import axios from 'axios';
import useMessage from "../../../hooks/useMessage"

let Index = () => {

    // const [recover, setRecover] = useState([{}])
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    // const message = useMessage();
    
    const handleInput = (e) => {
        e.preventDefault();
            axios.post("http://localhost:8080/api/account/forgot-password", {
                email: name,
                password: password
        }).then((response) => {
            // message.success(response)
            console.log(response)
            setPassword({ password });
        }).catch((error) => {
            // message.error(error)
            console.log(error.response)          
        });
        
    }

    return (
        <form className="form-horizontal form-material" id="loginform">
            <h3 className="box-title m-b-20">Recover Password</h3>
            <div className="form-group">
                <div className="col-xs-12">
                    <label>Username</label>
                    <input className="form-control" type="text" required={true} placeholder="" onChange={e => setName(e.target.value)}/>
                </div>
            </div>
            <div className="form-group">
                <div className="col-xs-12">
                    <label>Password</label>
                    <input className="form-control" type="text" required={true} placeholder="" onChange={e => setPassword(e.target.value)} />
                </div>
            </div>
            <div className="form-group text-center m-t-20">
                <div className="col-xs-12">
                    <button className="btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light" type="submit"
                    onClick={(e)=> handleInput(e)}>Reset</button>
                    
                </div>
            </div>
        </form>
    )
}

export default Index;