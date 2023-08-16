import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Link
  } from "react-router-dom";
  
import App from './App'
import Login from './components/Login'
import ChangeLog from './components/Pages/ChangeLog';
import Navbar  from './components/Navbar';
import About from './components/Pages/About';
import Welcome from './components/Pages/Welcome';
const Home = () => {
  return (
    <div>
        <Router>
        <Routes>
          <Route path="/" element={<App/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/ChangeLog" element={<ChangeLog/>}/>
          <Route path="/welcome" element={<Welcome/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default Home
