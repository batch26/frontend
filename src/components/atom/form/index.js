import axios from 'axios';
import { useState } from "react"
import useMessage from "../../../hooks/useMessage";
const FormChangePassword = () =>{
    const [changePassword, setChangePassword] = useState({
        oldPassword: "",
        newPassword: ""
    })
    const message = useMessage();
    const handlechange = (e) => {
        const { name, value } = e.target
        console.log(value)
        setChangePassword({ ...changePassword, [name]: value })
    }

    const submit = (e) => {
        e.preventDefault();

        // const token = JSON.parse(localStorage.getItem('user'));
        const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJmcml6a3k4NjFAZ21haWwuY29tIiwicm9sZSI6Im1hbmFnZXIiLCJleHAiOjE3MTA4NzA1MjQsImlhdCI6MTcxMDg1MjUyNH0.KkK7-qmV2EtuKUUENmh32FVx9r1LX0Q-rEuoRcZ9_5P6pHlx61-NhJKPG1N3WO6Xhbrelm5FW7yZI5p4736Fvg"
        // console.log(changePassword)
        axios
            .request({
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                method: 'POST',
                url: 'http://localhost:8080/api/account/form-change-password',
                data: changePassword,
            }).then((response) => {
                message.success(response)
                console.log(response)
                setChangePassword({ oldPassword: "", newPassword: "" });
            }).catch((error) => {
                message.error(error)
                console.log(error.response)
            })
    }
    return(
       <form>
            <div className="form-group">
                <input 
                type="password" 
                class="form-control" 
                onChange={handlechange}
                name='oldPassword'
                value={changePassword.oldPassword}
                placeholder="Type Your Old Password"/>
            </div>

            <div className="form-group">
                <input 
                type="password" 
                class="form-control" 
                onChange={handlechange}
                name='newPassword'
                value={changePassword.newPassword}
                placeholder="Type Your New Password"/>
            </div>

            <button type="button" class="btn btn-primary btn-md" onClick={submit}>Submit</button>
       </form>
    )
}

export default FormChangePassword