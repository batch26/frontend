import React, { useState, useEffect } from "react";
import axios from "axios";
import ModalDemo from "../../../organism/modal/demo";
import "../../../../static/admin/assets/plugins/bootstrap/css/bootstrap.min.css";
import "../../../../static/admin/assets//plugins/chartist-js/dist/chartist.min.css";
import "../../../../static/admin/assets//plugins/chartist-js/dist/chartist-init.css";
import "../../../../static/admin/assets//plugins/chartist-plugin-tooltip-master/dist/chartist-plugin-tooltip.css";
import "../../../../static/admin/assets//plugins/css-chart/css-chart.css";
import "../../../../static/admin/assets//plugins/toast-master/css/jquery.toast.css";
import "../../../../static/admin/css/style.css";
import "../../../../static/admin/css/colors/blue.css";
const Demo = () => {
  const [demo, setDemo] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8080/api/demos")
      .then((response) => {
        console.log(response.data)
        setDemo(response.data.data);
      })
      .catch((error) => {
        
        console.log(error.response);
      });
  }, []);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

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
              <td>{data.id}</td>
              <td>{data.image}</td>
              <td>{data.label}</td>
              <td>
                <button className="btn btn-warning" onClick={() => console.log("Edit clicked")}>EDIT</button>
                <span style={{ marginRight: '5px' }}></span>
                <button className="btn btn-danger" onClick={() => console.log("Delete clicked")}>DELETE</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ModalDemo show={showModal} closeModal={closeModal}/> {/* Memasukkan fungsi closeModal */}
    </div>
  );
};

export default Demo;
