import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./screens/login/Login";
import './index.css'
import { store } from '../app/store';
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route exact path="/" element={<App />} />
          <Route path='/studentprofile' element={<StudentProfile />} />
          <Route path="/facultyprofile" element={<FacultyProfile />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
