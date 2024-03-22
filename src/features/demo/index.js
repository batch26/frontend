import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import useMessage from "../../../src/hooks/useMessage";
import { useDispatch, useSelector } from "react-redux";
export const getDemos = createAsyncThunk("getDemos", async () => {
  try {
    const response = await axios.get("http://localhost:8080/api/demos");
    return response.data.data;
  } catch (error) {
    return error.response.data.message
  }

})
export const getDemosId = createAsyncThunk("getDemosId", async (id) => {
  try {
    const response = await axios.get(`http://localhost:8080/api/demo/${id}`);
    return response.data.data;
  } catch (error) {
    return error.response.data.message
  }

})
export const UpdateId = createAsyncThunk("updateId", async ({ id, data, setshow, dispatch }) => {
  let msg = useMessage()
  try {
    const response = await axios.post(`http://localhost:8080/api/demo/${id}`, data);
    msg.success(response)
    getDemos()
    setshow(false)
    return response.data.data;
  } catch (error) {
    msg.error(error)
    console.log(error, "err update di redux");
    return error.response.data.message;
  }
});

export const CreateData = createAsyncThunk("createData", async ({  data, setshow , setdata,dispatch }) => {
  let msg = useMessage()
  try {
    const response = await axios.post(`http://localhost:8080/api/demo`, data);
    getDemos()
    msg.success(response)
    setshow(false)
    setdata({ id: "", image: "", label: "" });
    return response.data.data;
  } catch (error) {
    msg.error(error)
    console.log(error, "err update di redux");
    return error.response.data.message;
  }
});

const demoSlice = createSlice({
  name: "listDemo",
  initialState: {
    data: [],
    dataid: {}
  },
  extraReducers: (builder) => {
    builder.addCase(getDemos.fulfilled, (state, action) => {
      state.data = action.payload;
    })
    builder.addCase(getDemosId.fulfilled, (state, action) => {
      state.dataid = action.payload;
    })

    builder.addCase(UpdateId.fulfilled, (state, action) => {
      state.dataid = action.payload;
    })

    builder.addCase(CreateData.fulfilled, (state, action) => {
      state.dataid = action.payload;
    })
  }

})

export default demoSlice.reducer;