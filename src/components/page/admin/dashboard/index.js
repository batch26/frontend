import { Outlet } from "react-router-dom";

const Dashboard = (props) => {
    return (
        <div className="page-wrapper">
        <div className="container-fluid">
            <div className="row page-titles">
                <div className="col-md-6 col-8 align-self-center">
                    <h3 className="text-themecolor m-b-0 m-t-0">{props.title}</h3>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="javascript:void(0)">{props.page}</a></li>
                        <li className="breadcrumb-item active">{props.title2}</li>
                    </ol>
                </div>
            <Outlet/>
            </div>
        </div>
        <footer className="footer">
            © 2017 Monster Admin by wrappixel.com
        </footer>
    </div>
    )
}

export default Dashboard;