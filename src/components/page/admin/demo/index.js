import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
// import { setListDemo } from '../../admin/demo/demoSlice';
import ModalDemo from "../../../organism/modal/demo";
import Swal from 'sweetalert2';
import useMessage from "../../../hooks/useMessage";
import { getDemos } from "../../../../features/demo";

const Demo = () => {
    // const [demo, setDemo] = useState([{}]);
    const [showModal, setShowModal] = useState(false);
    const [editItemId, setEditItemId] = useState(null);

    const demos = useSelector(state => state.listDemo.data)
    const dispatch = useDispatch();
    

    // useEffect(() => {
    //     // Fungsi untuk menambahkan token JWT ke header permintaan Axios
    //     const addTokenToAxiosHeader = async () => {
    //         try {
    //             localStorage.setItem('jwtToken', 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1YmVsaWFAZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiZXhwIjoxNzExMTA3MzIxLCJpYXQiOjE3MTEwODkzMjF9.vIx4m0P8Vp908bng9kf6bj1pJRjMeGz1c7RD5gm5cTR6KxaqAgl9IM7p3p6mtrw2-Yojz4Adjn1kYzxeOwh7Vw');
    //             // Mengambil token JWT dari localStorage
    //             const token = localStorage.getItem('jwtToken');

    //             axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    //             // Melakukan permintaan HTTP setelah menambahkan token ke header
    //             const response = await axios.get("http://localhost:8080/api/demos");
    //             closeModal();
    //             dispatch(setListDemo(response.data.data));
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };

    //     // Panggil fungsi untuk menambahkan token ke header saat komponen dimuat
    //     addTokenToAxiosHeader();
    // }, [dispatch]);

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
                    dispatch(getDemos()); // Memperbarui data demo setelah penghapusan berhasil
                    setShowModal(false); // Menutup modal setelah penghapusan berhasil
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

    const handleUpdate = (data) => {
        setEditItemId(data); // Mengatur ID item yang akan diedit
        setShowModal(true); // Menampilkan modal edit
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
                        {demos?.map((data, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{data.image}</td>
                                <td>{data.label}</td>
                                <td>
                                    <button className="btn btn-warning" onClick={() => handleUpdate(data)}>EDIT</button>
                                    <span style={{ marginRight: '5px' }}></span>
                                    <button className="btn btn-danger" onClick={() => handleDelete(data.id)}>DELETE</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <ModalDemo show={showModal} setShowModal={setShowModal} closeModal={closeModal} dispatch={dispatch} editItemId={editItemId} /> {/* Memasukkan fungsi closeModal */}
            </div>

        </div>
    );
}

export default Demo;
