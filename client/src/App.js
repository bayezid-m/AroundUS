import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import { AuthContextProvider } from './Context/AuthContext';

import './App.css';
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Welcome from './components/Welcome'

function App() {
  // const [users, setUsers] = useState([]);
  // const [imageData, setImageData] = useState(null);

  // async function getUsers() {
  //   const req = await fetch('http://localhost:2000/api/users');
  //   const data = await req.json()
  //   setUsers(data.user)
  //   if (data.status === 'ok') {
  //     setUsers(data.user)
  //     console.log(data.user)
  //     // const imageResponse = await fetch('http://localhost:2000/api/users');
  //     // const blob = await imageResponse.blob();
  //     // const imageURL = URL.createObjectURL(blob);
  //     // setImageData(imageURL);
  //     // console.log(data.user.image.data);
  //   } else {
  //     alert(data.error)
  //     console.log("something error");
  //   }
  // }
  return (
    <div>  
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
