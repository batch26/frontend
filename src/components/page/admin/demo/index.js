import axios from "axios";
import { useEffect, useState } from "react";
import "../../../../static/admin/css/style.css";
import "../../../../static/admin/assets/plugin/bootstrap/css/bootstrap.min.css";
import ModalDemo from "../../../organism/modal/demo";
import useMessage from "../../../hooks/useMessage";
import { useDispatch, useSelector } from "react-redux";
import { getDemos } from "../../../../features/demo";

const Demo = () => {

    // const [demo, setDemo] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedDemo, setSelectedDemo] = useState(null);
    const dispatch = useDispatch();
    const demos = useSelector(state => state.listDemo.data)
    let msg = useMessage()

    // const listdemo = () => {
    //     axios.get("http://localhost:8080/api/demos")
    //         .then((response) => {
    //             console.log(response.data)
    //             setDemo(response.data.data);
    //         }).catch((error) => {
    //             console.log(error.response);
    //         });
    // }
    useEffect(() => {
        dispatch(getDemos());
        // listdemo();
    }, [dispatch]);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const deleteById = (id) => {
        console.log("ini id", id)
        axios.delete(`http://localhost:8080/api/demo/${id}`)
            .then((response) => {
                msg.success(response)
                dispatch(getDemos());
                // listdemo();
            }).catch((error) => {
                msg.error(error)
            })
    }

    const getDemoById = (data) => {
        setSelectedDemo(data);
        setShowModal(true);
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
                    {demos?.map((data, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{data.image}</td>
                            <td>{data.label}</td>
                            <td>
                                <button className="btn btn-warning" onClick={() => getDemoById(data)}>EDIT</button>
                                <span style={{ marginRight: '5px' }}></span>
                                <button className="btn btn-danger" onClick={() => deleteById(data.id)}>DELETE</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ModalDemo show={showModal} closeModal={closeModal} setShowModal={setShowModal} selectedDemo={selectedDemo} dispatch={dispatch}/>
        </div>
    )
}

export default Demo;