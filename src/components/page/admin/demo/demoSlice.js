import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    listdemo: [], // Initial state diisi dengan listdemo dari Demo
  };

export const demoSlice = createSlice({
    name: 'demo',
    initialState,
    reducers: {
        setListDemo: (state, action) => {
            state.listdemo = action.payload;
          },
    }
})  

export const { setListDemo } = demoSlice.actions;

export default demoSlice.reducer;