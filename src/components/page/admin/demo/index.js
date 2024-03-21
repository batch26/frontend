import LeftSideBars from "../../../organism/admin/lifeside";
import NavbarAdmin from "../../../organism/admin/navbar";
import Dashboard from "../dashboard";
import axios from "axios";
import { useEffect, useState } from "react";

const Demo = () => {

    const [demo, setDemo] = useState([{}])

    useEffect(() => {
        axios.get("http://localhost:8080/api/demos")
            .then((response) => {
                setDemo(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div class="container">
            <h1>Demo</h1>
            <button className="btn btn-primary" onclick="show()">CREATE</button>
            <table id="myTable" className="table table-success table-striped" style={{ marginTop: '10px' }}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>IMAGE</th>
                        <th>LABEL</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {demo.map((data,index) => (
                        <tr key={index}>
                            <td>{data.id}</td>
                            <td>{data.image}</td>
                            <td>{data.label}</td>
                            <td>
                            <button className="btn btn-warning" onclick="show()">EDIT</button>
                            <span style={{ marginRight: '5px' }}></span> 
                            <button className="btn btn-danger" onclick="show()">DELETE</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Demo;