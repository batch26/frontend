import axios from "axios";
import { useState, useEffect } from "react";
import { Button, ButtonGroup, Form, Modal } from "react-bootstrap";
import useMessage from "../../../hooks/useMessage";
const ModalDemo = (props) => {
    const [data, setData] = useState({
        id: "",
        image: "",
        label: ""
    })
    let msg = useMessage()
    const Handelchange = (e) => {
        const { name, value } = e.target

        setData({ ...data, [name]: value })
    }

    const handlesubmit = () => {
        const { id } = props.selectedDemo;
        axios.post("http://localhost:8080/api/demo", data).then((response) => {
            props.listdemo()
            msg.success(response)
            setData({ id: "", image: "", label: "" })
            props.setShowModal(false)

        }).catch((error) => {
            msg.error(error)
        })
    }

    useEffect(() => {
        if (props.selectedDemo) {
            setData({
                id: props.selectedDemo.id,
                image: props.selectedDemo.image,
                label: props.selectedDemo.label
            });
        } else {
            setData({
                id: "",
                image: "",
                label: ""
            });
        }
    }, [props.selectedDemo]);

    return (
        <Modal show={props.show} onHide={props.closeModal} size={"lg"} backdrop={"static"}> {/* Menggunakan onHide untuk menutup modal saat tombol close ditekan */}
            <Modal.Header >
                <Modal.Title>{props.selectedDemo ? 'EDIT DEMO' : 'ADD DEMO'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className={"mb-3"} style={{ display: "none" }}>
                    <Form.Label>ID</Form.Label>
                    <Form.Control
                        name={"id"}
                        onChange={Handelchange}
                        value={data.id}
                    />
                </Form.Group>
                <Form.Group className={"mb-3"}>
                    <Form.Label>IMAGE URL</Form.Label>
                    <Form.Control
                        name={"image"}
                        onChange={Handelchange}
                        value={data.image}
                    />
                </Form.Group>
                <Form.Group className={"mb-3"}>
                    <Form.Label>LABEL</Form.Label>
                    <Form.Control
                        name={"label"}
                        onChange={Handelchange}
                        value={data.label}
                    />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <ButtonGroup >
                    <Button onClick={props.closeModal} style={{ marginRight: '10px' }}>CANCEL</Button>
                    <Button onClick={handlesubmit}>SAVE</Button>
                </ButtonGroup>

            </Modal.Footer>
        </Modal>
    );
};

export default ModalDemo;
