import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Signin from './Pages/Signin';
import ManagePoll from './Pages/ManagePoll';
import ManageUser from './Pages/ManageUser';
import SignUp from './Pages/SignUp';

function App() {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setAuth(token);
  }, []);

  axios.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    (res) => {
      return res;
    },
    (error) => {
      if (error.response.status === 401) {
        localStorage.removeItem('token');
        setAuth(null);
      }
      return Promise.reject(error);
    }
  );

  return  (
    <Routes>
      <Route path="/signup" element={<SignUp setAuth={setAuth} />} />
      <Route path="*" element={<Signin setAuth={setAuth} />} />
    </Routes>
  );
}

export default App;
