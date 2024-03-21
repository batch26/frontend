import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ModalDemo from "../../../organism/modal/demo";
import Swal from 'sweetalert2';

const Demo = () => {
    const [demo, setDemo] = useState([{}]);
    const [showModal, setShowModal] = useState(false);

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
        // Fungsi untuk menambahkan token JWT ke header permintaan Axios
        const addTokenToAxiosHeader = async () => {
            try {
                localStorage.setItem('jwtToken', 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1YmVsaWFAZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiZXhwIjoxNzExMDQ5Mjg4LCJpYXQiOjE3MTEwMzEyODh9.WnTyLY7yXCh1skwunmEzlLtY0wYyZ5xTtH_Gs7cdc8FA4nDZ1-mi2XB88aIB393TRwQ6oGN1WQuFgkqiNaeQwg');
                // Mengambil token JWT dari localStorage
                const token = localStorage.getItem('jwtToken');

                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

                // Melakukan permintaan HTTP setelah menambahkan token ke header
                const response = await axios.get("http://localhost:8080/api/demos");
                closeModal();
                setDemo(response.data.data);
                listdemo();
            } catch (error) {
                console.log(error);
            }
        };

        // Panggil fungsi untuk menambahkan token ke header saat komponen dimuat
        addTokenToAxiosHeader();
    }, []);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Apakah Anda yakin?',
            text: "Anda tidak akan dapat mengembalikan ini!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Ya, hapus!',
            cancelButtonText: 'Batal'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await axios.delete(`http://localhost:8080/api/demo/${id}`);
                    const updatedDemo = demo.filter(item => item.id !== id);
                    setDemo(updatedDemo);
                    Swal.fire(
                        'Terhapus!',
                        'Data telah berhasil dihapus.',
                        'success'
                    );
                } catch (error) {
                    console.log(error);
                    Swal.fire(
                        'Gagal!',
                        'Terjadi kesalahan saat menghapus data.',
                        'error'
                    );
                }
            }
        });
    };

    return (
        <div className="container">
            <div class="row mt-2 ">
                <button className="btn btn-primary" onClick={openModal} >CREATE</button>
                <table id="myTable" className="table table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>LABEL</th>
                            <th>IMAGE</th>
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
                                    <button className="btn btn-warning" onClick={() => ''}>EDIT</button>
                                    <span style={{ marginRight: '5px' }}></span>
                                    <button className="btn btn-danger" onClick={() => handleDelete(data.id)}>DELETE</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <ModalDemo show={showModal} closeModal={closeModal} listdemo={listdemo} /> {/* Memasukkan fungsi closeModal */}
            </div>

        </div>
    );
}

export default Demo;
