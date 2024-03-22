import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import Layout from './components/page/layout';
import Dashboard from './components/page/admin/dashboard';
import Demo from './components/page/admin/demo';
import NotFound from './components/page/error/404';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
     <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="demo" element={<Demo />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
