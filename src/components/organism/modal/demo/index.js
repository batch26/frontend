import axios from "axios";
import { useState, useEffect } from "react";
import { Button, ButtonGroup, Form, Modal } from "react-bootstrap";
import useMessage from "../../../hooks/useMessage";
import { useDispatch, useSelector } from "react-redux";
import { CreateData, UpdateId, getDemos, getDemosId } from "../../../../features/demo";
const ModalDemo = (props) => {
    const [data, setData] = useState({
        id: "",
        image: "",
        label: ""
    })
    const dispatch = useDispatch();
    const demos = useSelector(state => state.listDemo.dataid)
    console.log(demos, "dimodal")

    let msg = useMessage()

    const Handelchange = (e) => {
        const { name, value } = e.target

        setData({ ...data, [name]: value })
    }

    const getdetaildata = async() => {
        try {
           dispatch(getDemosId(props.selectedDemo))
            setData({
                id: demos.id,
                image: demos.image,
                label: demos.label
            });
        } catch (error) {

        }
    };

    const handleSubmit = () => {
        if (data.id) {
            axios.post(`http://localhost:8080/api/demo/${props.selectedDemo}`, data)
                .then((response) => {
                    dispatch(getDemos())
                    msg.success(response);
                    setData({ id: "", image: "", label: "" });
                    props.setShowModal(false);
                })
                .catch((error) => {
                    msg.error(error);
                });
          
            // dispatch(UpdateId({id:props.selectedDemo, data:data, setshow:props.setShowModal}))
        } else {

            // dispatch(CreateData({data:data , setshow:props.setShowModal , setData:setData} ))
            axios.post("http://localhost:8080/api/demo", data)
                .then((response) => {
                    dispatch(getDemos())
                    msg.success(response);
                    setData({ id: "", image: "", label: "" });
                    props.setShowModal(false);
                })
                .catch((error) => {
                    msg.error(error);
                });
        }
    };

    useEffect(() => {
        if (props.selectedDemo) {
        getdetaildata()
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
                    {props.selectedDemo ? <Button onClick={handleSubmit}>Update</Button> : <Button onClick={handleSubmit}>SAVE</Button>}

                </ButtonGroup>

            </Modal.Footer>
        </Modal>
    );
};

export default ModalDemo;
