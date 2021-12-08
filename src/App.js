import React, { useState } from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import {Link} from 'react-router-dom'
import Home from './Pages/Home';
import Login from './Pages/Login';
import Settings from './Pages/Settings';
import PrivateRoute from './Pages/PrivateRoute';


function App() {
  const [isAuth, setisAuth] = useState(false)

  return (
    <>

    <BrowserRouter>

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Home</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/dashboard">Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard/settings">Settings</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login Page</Link>
        </li>
      </ul>
     
    </div>
  </div>
</nav>

     
         
      <Routes>
        <Route path="/" element={<Home/>}>  </Route>
        <Route path="/login" element={<Login/>}> </Route>
        <Route path="/dashboard" element={<Dashboard/>}> </Route>
        <Route  path="/dashboard/settings" element={<Settings/>}> </Route>
      </Routes>

    </BrowserRouter>
  </>
   
  );
}

export default App;
