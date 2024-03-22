import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'listDemo',
  initialState: {

  },
  reducers: {
    increment: (state) => {
      
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
    }
}
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer