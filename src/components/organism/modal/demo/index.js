import axios from "axios";
import { useState } from "react";
import { Button, ButtonGroup, Form, Modal } from "react-bootstrap";
import useMessage from "../../../hooks/useMessage";
const ModalDemo = (props) => {
  const [data, setData] = useState({
    image: "",
    label: ""
  })
  let msg= useMessage()
  const Handelchange = (e) => {
    const { name, value } = e.target

    setData({ ...data, [name]: value })
  }

  const handlesubmit = () => {
    axios.post("http://localhost:8080/api/demo", data).then((response)=>{
      console.log(response.data)
      msg.success(response)
      setData({image:"", label:""})
    }).catch((error)=>{
      msg.error(error)
    })
  }
  return (
    <Modal show={props.show} onHide={props.closeModal} size={"lg"} backdrop={"static"}> {/* Menggunakan onHide untuk menutup modal saat tombol close ditekan */}
      <Modal.Header >
        <Modal.Title>Tambah Demo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group className={"mb-3"}>
          <Form.Label>image url</Form.Label>
          <Form.Control
            name={"image"}
            onChange={Handelchange}
            value={data.image}
          />
        </Form.Group>
        <Form.Group className={"mb-3"}>
          <Form.Label>Label</Form.Label>
          <Form.Control
            name={"label"}
            onChange={Handelchange}
            value={data.label}
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <ButtonGroup >
        <Button onClick={props.closeModal} style={{ marginRight: '10px' }}>cancel</Button>
        <Button onClick={handlesubmit}>Simpan</Button>
        </ButtonGroup>
   
      </Modal.Footer>
    </Modal>
  );
};

export default ModalDemo;
