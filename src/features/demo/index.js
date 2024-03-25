import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import useMessage from "../../../src/hooks/useMessage";
import { useDispatch, useSelector } from "react-redux";
import { apiUrl } from "../../custom/envcutom";

export const getDemos = createAsyncThunk("getDemos", async () => {
  try {
  
    const response = await axios.get(`${apiUrl}demos`);
    return response.data.data;
  } catch (error) {
    return error.response.data.message
  }

})
export const UpdateId = createAsyncThunk("updateId", async ({ data }) => {

  let msg = useMessage()

  await axios.post(`http://localhost:8080/api/demo/${data.id}`, data).then((response) => {
msg.success(response)
    return data
  }).catch((error) => {
    msg.error(error)
    return error
  });

});

export const CreateData = createAsyncThunk("createData", async ({ data }) => {
  let msg = useMessage()

  const sendata = {
    image: data.image,
    label: data.label
  }

  await axios.post(`http://localhost:8080/api/demo`, sendata).then((response) => {

    msg.success(response)
    return sendata
  }).catch((error) => {
    msg.error(error)

  });


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

    builder.addCase(UpdateId.fulfilled, (state, action) => {
      const updatedDemo = action.payload;


      if (updatedDemo) {
        const demoIndex = state.data.findIndex(demo => demo.id === updatedDemo.id);

        if (demoIndex < 0) {
          state.data[demoIndex] = updatedDemo;
        }
      }
    });


    builder.addCase(CreateData.fulfilled, (state, action) => {
      state.data.push(action.payload)
    })
  }

})

export default demoSlice.reducer;