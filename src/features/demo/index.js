import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getDemos = createAsyncThunk("getDemos", () => {
    return axios.get("http://localhost:8080/api/demos")
    .then((response) => response.data.data)
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

