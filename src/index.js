import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Landing from './components/page/landing';
import reportWebVitals from './reportWebVitals';
import Recover from "./components/page/recover";
import Login from './components/page/login';
import { Provider } from 'react-redux';
import store from './app/store';
import Register from "./components/page/register"
import ChangePassword2 from './components/page/changepassword2';
import store from './app/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <Landing></Landing> */}
    {/* <Recover></Recover> */}
    {/* <Login></Login> */}
    <Provider store={store}>
      <App />
      {/* <Register /> */}
    </Provider>,
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
