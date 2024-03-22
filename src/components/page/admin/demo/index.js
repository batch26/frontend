
import axios from "axios";
import { useEffect, useState } from "react";
import "../../../../static/admin/css/style.css";
import "../../../../static/admin/assets/plugins/bootstrap/css/bootstrap.min.css";
import ModalDemo from "../../../organism/modal/demo";
import useMessage from "../../../hooks/useMessage";
import { useDispatch, useSelector } from "react-redux";
import { getDemos } from "../../../../features/demo";
const Demo = () => {
  // const [demo, setDemo] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedDemo, setSelectedDemo] = useState(null);
  let msg = useMessage()
  const dispatch = useDispatch();
  const demos = useSelector(state => state.listDemo.data)
  let dataId ;

  // const listdemo =()=>{
  //     axios.get("http://localhost:8080/api/demos")
  //     .then((response) => {
  //       console.log(response.data)
  //       setDemo(response.data.data);
  //     })
  //     .catch((error) => {

  //       console.log(error.response);
  //     });
  // }
  

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedDemo(null)
    setShowModal(false);
  };
  const deleteById = (id) => {
    msg.confirmRemove(() => {
      console.log("ini id", id)
      axios.delete(`http://localhost:8080/api/demo/${id}`).then((response) => {
        msg.success(response)
        dispatch(getDemos())
      }).catch((error) => {
        msg.error(error)
      })
    })

  }

  const getDemoById = (id) => {
    setSelectedDemo(id);
    setShowModal(true);
  }
  useEffect(() => {

    dispatch(getDemos());
  }, [dispatch]);
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
          {demos?.map((data) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.image}</td>
              <td>{data.label}</td>
              <td>
                <button className="btn btn-warning" onClick={() => getDemoById(data.id)}>EDIT</button>
                <span style={{ marginRight: '5px' }}></span>
                <button onClick={() => deleteById(data.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ModalDemo show={showModal} closeModal={closeModal} dataId={dataId} setShowModal={setShowModal} selectedDemo={selectedDemo} />
    </div>
  );
};

export default Demo;
