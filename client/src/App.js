import Home from 'pages/Home';
import Login from 'pages/Login';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from 'components/PrivateRouter';
import Admin from 'pages/Admin';
function App() {
  return (
  <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route  element={<PrivateRoute />}>
          <Route path="/admin/*" element={<Admin />} />
        </Route>
    </Routes>
  </>
  );
}

export default App;
