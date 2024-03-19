import { Card, Col, Container, Form, FormControl, Row, Button, FormGroup } from "react-bootstrap"
import Navigation from "../../organism/navbar"
import logo from "../../../static/images/monster-admin-logo.png"
import { useState } from "react"
import axios from 'axios';
import Footer from "../../organism/footer"
import useMessage from "../../../hooks/useMessage";

const ChangePassword = () => {
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
        const token =  "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiU3RhZmYiLCJzdWIiOiJmcml6a3k4NjFAZ21haWwuY29tIiwiaWF0IjoxNzEwODI3NjE2LCJleHAiOjE3MTA4NDU2MTZ9.V4H4FkCXmI0toabMhJhQeg7M3QtWW7YFYEMnbp6d3pg"
        console.log(changePassword)
        axios
            .request({
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                method:'POST',
                url: 'https://e001-103-109-193-90.ngrok-free.app/api/account/form-change-password',
                data: changePassword,
            }).then((response)=>{
                message.success(response)
                console.log(response)
                setChangePassword({ oldPassword: "", newPassword: "" });
            }).catch((error)=>{
                message.error(error)

                console.log(error.data)
            })

    }


    return (
        <div className="fix-header">
            <div id="main-wrapper">
                <header className="topheader">
                    <div className="fix-width">
                        <Navigation logo={logo} />
                    </div>
                </header>
                <div className="page-wrapper" >
                    <Container fluid >
                        <div className="fix-width" >
                            <Row className={"justify-content-center banner-text"} >
                                <Col md={5} className={"m-b-10"}>
                                    <Card>
                                        <Card.Header style={{backgroundColor:"white"}} className=" border-0 font-weight-bold mt-2 ">Form Change Password</Card.Header>
                                        <Card.Body>
                                            <Form.Group className={"mb-4"}>
                                                <FormControl
                                                    placeholder={"Type Your Old Password"}
                                                    name="oldPassword"
                                                    value={changePassword.oldPassword}
                                                    type="password"
                                                    onChange={handlechange} />
                                            </Form.Group>
                                            <Form.Group className={"mb-4"}>
                                                <FormControl
                                                    placeholder={"Type Your New Password"}
                                                    name="newPassword"
                                                    value={changePassword.newPassword}
                                                    type="password"
                                                    onChange={handlechange} />
                                            </Form.Group>
                                            <Button variant="primary" size="lg" onClick={submit}>Submit</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default ChangePassword