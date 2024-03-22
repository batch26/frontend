import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getDemos = createAsyncThunk("getDemos", async () => {
    // Mengambil token JWT dari localStorage
    localStorage.setItem('jwtToken', 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1YmVsaWFAZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiZXhwIjoxNzExMTA3MzIxLCJpYXQiOjE3MTEwODkzMjF9.vIx4m0P8Vp908bng9kf6bj1pJRjMeGz1c7RD5gm5cTR6KxaqAgl9IM7p3p6mtrw2-Yojz4Adjn1kYzxeOwh7Vw')
    const token = localStorage.getItem('jwtToken');

    // Mengatur token JWT ke header permintaan Axios
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    // Melakukan permintaan HTTP untuk mendapatkan data demos
    const response = await axios.get("http://localhost:8080/api/demos");
    
    // Mengembalikan data dari respons
    return response.data.data;
})

const demoSlice = createSlice({
    name: "listDemo",
    initialState:{
        data: null
    },
    extraReducers: (builder) => {
        builder.addCase(getDemos.fulfilled, (state,action) => {
          state.data = action.payload;
        })
      }
})

export default demoSlice.reducer;

