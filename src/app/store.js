import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import demoReducer from '../components/page/admin/demo/demoSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    demo: demoReducer
  },
})