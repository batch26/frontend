import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from '../features/counter/counterSlice'
import demoReducer from '../features/demo'; 

export default configureStore({
    reducer: {
        // counter: counterReducer,
        listDemo: demoReducer,
    },
})