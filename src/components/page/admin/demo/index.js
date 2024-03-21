import axios from "axios";
import { useEffect, useState } from "react";
import "../../../../static/admin/css/style.css";
import "../../../../static/admin/assets/plugins/bootstrap/css/bootstrap.min.css";
import ModalDemo from "../../../organism/modal/demo";
import useMessage from "../../../hooks/useMessage";
const Demo = () => {

    const [demo, setDemo] = useState([{}])

    const [showModal, setShowModal] = useState(false);

    let msg = useMessage();

    const listdemo = () => {
        axios.get("http://localhost:8080/api/demos")
            .then((response) => {
                console.log(response.data)
                setDemo(response.data.data);
            })
            .catch((error) => {

                console.log(error.response);
            });
    }
    
    useEffect(() => {
        listdemo()
    }, []);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const deleteById = (id) => {
        console.log(id)
        axios.delete(`http://localhost:8080/api/demo/${id}`)
            .then((response) => {
                console.log(response)
                msg.success(response)
            }).catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className="container">
            <h1>Demo</h1>
            <button className="btn btn-primary" onClick={openModal}>CREATE</button>
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
                    {demo.map((data, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{data.image}</td>
                            <td>{data.label}</td>
                            <td>
                                <button className="btn btn-warning" onClick={() => console.log("Edit clicked")}>EDIT</button>
                                <span style={{ marginRight: '5px' }}></span>
                                <button className="btn btn-danger" onClick={() => deleteById(data.id)}>DELETE</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ModalDemo show={showModal} closeModal={closeModal} listdemo={listdemo} showModal={setShowModal}/>
        </div>
    )
}

export default Demo;