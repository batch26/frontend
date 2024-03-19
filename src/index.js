import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Landing from './components/page/landing';
import reportWebVitals from './reportWebVitals';
import Recover from "./components/page/recover";
import ChangePassword from './components/page/changepassword';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Landing></Landing> */}
  <ChangePassword/>
    {/* <Recover></Recover> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
