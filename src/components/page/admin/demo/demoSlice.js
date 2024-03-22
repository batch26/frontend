import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    listdemo: [], // Initial state diisi dengan listdemo dari Demo
    error: null // Menambahkan field untuk menyimpan informasi kesalahan
};

export const demoSlice = createSlice({
    name: 'demo',
    initialState,
    reducers: {
        setListDemo: (state, action) => {
            state.listdemo = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        clearError: (state) => {
            state.error = null;
        }
    }
});

export const { setListDemo, setError, clearError } = demoSlice.actions;

export const handleError = (error) => {
    return (dispatch) => {
        dispatch(setError(error));
    };
};

export const selectError = (state) => state.demo.error;

export default demoSlice.reducer;
